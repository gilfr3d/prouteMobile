import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {DataTable} from 'react-native-paper';
import {Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import warehouse from '../assets/images/warehouse.png';
import axios from 'axios';
import {SafeAreaView} from 'react-native';

export default function SalesOrderScreen() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([2, 3, 4]);
  const [itemsPerPage, setItemsPerPage] = useState(numberOfItemsPerPageList[0]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          'http://gs1ksa.org:4091/api/v1/salesOrder',
        );
        setOrders(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching sales orders:', error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleItemsPerPageChange = value => {
    setItemsPerPage(value);
    setPage(0); // Reset page to 0 when changing items per page
  };
  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toDateString(); // Customize as per your requirement
  };
  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, orders?.length);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={warehouse} />
      </View>
      <Text style={styles.title}>List of Available Sales Order from ERP</Text>
      <ScrollView horizontal>
        <View style={styles.tableContainer}>
          <DataTable>
            <DataTable.Header style={styles.header}>
              <DataTable.Title>ID</DataTable.Title>
              <DataTable.Title>Customer Name</DataTable.Title>
              <DataTable.Title>Order Date</DataTable.Title>
              <DataTable.Title>Order Transc Date</DataTable.Title>
              <DataTable.Title>Payment Type</DataTable.Title>
              <DataTable.Title>Order Status</DataTable.Title>
            </DataTable.Header>
            {loading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : (
              orders?.slice(from, to).map(order => (
                <DataTable.Row style={styles.rowContainer} key={order.OrderId}>
                  <DataTable.Cell style={styles.cell}>
                    {order.OrderId}
                  </DataTable.Cell>
                  <DataTable.Cell style={styles.cell}>
                    {order.CustomerName}
                  </DataTable.Cell>
                  <DataTable.Cell style={styles.cell}>
                    {formatDate(order.OrderDate)}
                  </DataTable.Cell>
                  <DataTable.Cell style={styles.cell}>
                    {formatDate(order.OrderTrxDate)}
                  </DataTable.Cell>
                  <DataTable.Cell style={styles.cell}>
                    {order.PaymentType}
                  </DataTable.Cell>
                  <DataTable.Cell style={styles.cell}>
                    {order.RouteId}
                  </DataTable.Cell>
                  <DataTable.Cell style={styles.cell}>
                    {order.OrderStatus}
                  </DataTable.Cell>
                </DataTable.Row>
              ))
            )}
            <DataTable.Pagination
              page={page}
              numberOfPages={Math.ceil(orders?.length / itemsPerPage)}
              onPageChange={setPage}
              label={`${from + 1}-${to} of ${orders?.length}`}
              numberOfItemsPerPageList={[1, 2, 3, 4, 5]}
              numberOfItemsPerPage={itemsPerPage}
              onItemsPerPageChange={handleItemsPerPageChange}
              selectPageDropdownLabel={'Rows per page'}
            />
          </DataTable>
        </View>
      </ScrollView>
      <View style={styles.fixToText} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 199,
    height: 300,
    borderRadius: 5,
  },
  header: {
    backgroundColor: '#669ae8',
    fontWeight: 'bold',
    color: 'red',
  },
  title: {
    fontSize: 15,
    backgroundColor: '#FF460C',
    textAlign: 'center',
    color: '#FFFFFF',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 2,
  },
  tableContainer: {
    flex: 1,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly', // or 'space-evenly' for more space
  },
  cell: {
    flex: 1,
    width: 'auto', // Adjust this as needed
    textAlign: 'left', // or 'left' or 'right'
  },
});
