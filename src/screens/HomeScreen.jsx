import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import icon1 from '../assets/images/ellipse.png';
import icon2 from '../assets/images/ellipse1.png';
import icon3 from '../assets/images/Ellipse2.png';

export default function HomeScreen() {
  const navigation = useNavigation();
  const handleImagePress = () => {
    navigation.navigate('SalesOrders');
  };
  return (
    <View style={styles.container}>
      <View style={styles.topHeaderHome}>
        <Text style={styles.text}>PRoute Logistic System</Text>
      </View>
      <View style={styles.imageContainer}>
        <TouchableOpacity>
          <Image style={styles.image} source={icon1} />
          <Text style={styles.text1}>Start of the Day</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleImagePress}>
          <Image style={styles.image} source={icon2} />
          <Text style={styles.text1}>Sales Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.image} source={icon3} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topHeaderHome: {
    height: 60,
    backgroundColor: '#350F9F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text1: {
    fontSize: 10,
    fontWeight: 'bold',
    paddingTop: 2,
    color: '#350F9F',
    textAlign: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center', // Add this line
    marginTop: 20,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
});
