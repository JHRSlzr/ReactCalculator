import React, {useState} from "react";
import {StyleSheet, View, Text, SafeAreaView, StatusBar, Button} from "react-native";

import colors from './src/utils/colors';
import Form from "./src/components/Forms";

export default function App(){
  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);
  const [suma,setSuma] = useState(0);
  const [resta,setResta] = useState(0);
  const [multi,setMulti] = useState(0);
  const [div,setDiv] = useState(0);

  const onSubmit = ()=>{
    console.log("numero 1 ->", num1)
    console.log("Numero 2->",num2)
    setSuma(parseInt(num1)+parseInt(num2));
    setResta(parseInt(num1)-parseInt(num2));
    setMulti(parseInt(num1)*parseInt(num2));
    setDiv(parseInt(num1)/parseInt(num2));
  }
  return (
    <>
      <StatusBar barStyle="light-content"></StatusBar>

      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.titleApp}>CALCULADORA GAMER</Text>
        <Form setNum1 = {setNum1} setNum2 = {setNum2} setSuma = {suma} setResta = {resta} setMulti = {multi} setDiv = {div}/>
        <Button style={styles.ButtonRes} title="RESULTADO" onPress={onSubmit}/>
      </SafeAreaView>
    </>

  );
}

const styles = StyleSheet.create({
  safeArea:{
    backgroundColor: colors.PRIMARY_COLOR,
    height:200,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    alignItems:"center"
  },
  titleApp:{
    fontSize:20,
    fontWeight:"bold",
    color: '#000',
    marginTop:15,
    marginBottom:280
  },
  ButtonRes: {
    position: 'absolute',
    bottom: 200
  }
})