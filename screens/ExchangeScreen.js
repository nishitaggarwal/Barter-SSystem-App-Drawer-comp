import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';

export default class ExchangeScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            userId: firebase.auth().currentUser.email,
            item_Name: '',
            description: ''
        }
    }

    createUniqueId() {
        return Math.random().toString(36).substring(7)
    }

    addItem = (item_Name, description) => {
        var userName = this.state.userId
        var randomRequestId = this.createUniqueId()
        db.collection("exchange_requests").add({
            'username': userName,
            'item_name': item_Name,
            'description': description,
            'request_Id': randomRequestId
        })
        this.setState({
            itemName: '',
            description: ''

        })

        return Alert.alert(
            'Item ready to exchange',
            '',
            [
                {
                    text: '0K', onPress: () => {
                        this.props.navigation.navigate('HomeScreen')

                    }
                }
            ]
        )
    }

    render() {
        return (
            <View style={styles.container}>
                    
                        <MyHeader title="Request Items" />
               
                <TextInput
                    style={styles.itemname}
                    placeholder="Item Name"
                    onChangeText={(text) => {
                        this.setState({
                            item_Name: text
                        })
                    }}
                />
                <TextInput
                    style={styles.itemname}
                    placeholder="Description(Why You want It)"
                    onChangeText={(text) => {
                        this.setState({
                            description: text
                        })
                    }}
                />
                <TouchableOpacity
                    onPress={() => { this.addItem(this.state.userId, this.state.item_Name) }}
                    style={styles.button}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8BE85',
       
       
    },
    itemname: {
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor: '#ff8a65',
        fontSize: 20,
        margin: 10,
        paddingLeft: 10,
        alignItems: 'center',
        marginLeft:450,
        marginTop:20
    },
    button: {
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ff5722",
        shadowColor: "#000",
        marginLeft:450,
        shadowOffset: {
            width: 0,
            height: 8
        }
    }
})