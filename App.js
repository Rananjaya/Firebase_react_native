import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import { Container, Content, Form, Input, Item, Button, Label } from 'native-base';


const firebaseConfig = {
  apiKey: "AIzaSyBLUSO212n3HhTZVJ8p86hcKLkLVBouffU",
  authDomain: "react-firebase-a5eab.firebaseapp.com",
  databaseURL: "https://react-firebase-a5eab.firebaseio.com",
  projectId: "react-firebase-a5eab",
  storageBucket: "react-firebase-a5eab.appspot.com",

};

firebase.initializeApp(firebaseConfig);


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email:'',
      password:'',
    }
  }

  OnEmailChnage = (arg) =>{
    this.setState({
       email:arg
      })

      console.log("email",this.state.email)

  }
  onPasswordChanage = (arg) =>{
    this.setState({
      password:arg
      })
     
      console.log("password",this.state.password)
  }

  singupUser = () =>{
    console.log("Inside sing user funaction", this.state.email)
    let email = this.state.email
    let password = this.state.password
      try{
         if(this.state.email.length < 6 ){
           console.log("true")
            alert("must>6")
            return;
         }
         firebase.auth().createUserWithEmailAndPassword(email,password)
      }
      catch(error){
         console.log(error.toString())
      }
  }
  LogUser = () =>{
    let email = this.state.email
    let password = this.state.password
      try{
            firebase.auth().signInWithEmailAndPassword(email,password)
            .then(function(user){
                  console.log(user)
            })
      }
      catch(error){
          console.log(error.toString())
      }
  }

 
  
  render(){
  return (
    <Container style={styles.container}>
      <Form>
        <Item floatingLabel>
          <Label>
            Email
         </Label>
         
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={this.OnEmailChnage}
          />

        </Item>

        <Item floatingLabel>
          <Label>
            Password
         </Label>

          <Input
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={this.onPasswordChanage}

          />

        </Item>

        <Button onPress={this.LogUser} style={{marginTop:10}} full rounded success>
            <Text style={{color:'white'}}>Login</Text>
        </Button>


        <Button onPress={this.singupUser} style={{marginTop:10}} full rounded primary>

          <Text style={{color:'white'}}>Sign up</Text>

        </Button>
      </Form>
    </Container>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding:10
  },
});
