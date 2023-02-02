import React from 'react';
import { View, StyleSheet } from 'react-native';
import TaskList from './components/TasksList'
import Footer from './components/Footer';
import GlobalState from './Context/GlobalState';

export default class App extends React.Component{
 render(){
  return(
   <GlobalState>
    <View style={styles.container}>
     <TaskList />
     <Footer/>
    </View>
   </GlobalState>
  );
 }
}
const styles = StyleSheet.create({
 container: {
  flex: 1,
  flexDirection:'column',
 }
});