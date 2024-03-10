
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import PagerView from 'react-native-pager-view';
import Screen1 from './ini_screen2';
import Screen2 from './ini_screen3';



export default function App() {
  return (
   <SafeAreaView  style={{ flex: 1 }}>
    <PagerView style={styles.viewPager} initialPage={0} >
        <View style={styles.page} key="1">
         <Screen1/>
        </View>
        <View style={styles.page} key="2">
         <Screen2/>
        </View>
  </PagerView>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    viewPager: {
      flex: 1,
    },
    page: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });


