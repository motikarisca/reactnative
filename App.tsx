import * as React from 'react';
import { useState, useEffect } from 'react';
import {View, Text} from 'react-native';
const App = () => {
  return (
    <view style={{background: 'brown', flex: 1}}>
      <Text style= {{color: 'white',fontSize: 30,textAlign: 'center'}}>Penjualan Pattek Renyah Online</Text>
      <Text style= {{backgroundColor: 'gray', width: 100, height: 100, borderRadius: 25,textAlign: 'center'}}>masuk</Text>
    </view>
  );
}

export default App;