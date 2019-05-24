import React,{Component} from 'react';
import {Image,View} from 'react-native';

export default class PaymentScreen extends Component {
    render() {
        return (
            <View style={{alignItems: 'center', marginTop: 32}}>
                <Image source = {require('../assets/images/QR.png')}/>
            </View>
        );
    }
}