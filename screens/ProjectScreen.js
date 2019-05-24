import React, { Component } from "react";
import {Header, Card} from 'react-native-elements';
import {Text, StyleSheet, ProgressBarAndroid} from 'react-native';
import { Button, Container, Content, Icon, Accordion, View, CardItem, Left, Right, Body, Item, Picker } from "native-base";
const dataArray = [
  { title: "Información General", content: "Somos una organización no gubernamental colombiana, creada por la artista Shakira en 1997 con el objetivo principal de promover la EDUCACIÓN PÚBLICA DE CALIDAD para los niños en situación de vulnerabilidad en Colombia." },
  { title: "Misión", content: "Somos una organización que le apuesta a una Colombia equitativa a través de la educación pública de calidad. Lo hacemos construyendo espacios educativos dignos, generando pedagogías innovadoras, apoyando la nutrición, brindando atención psicosocial y promoviendo el desarrollo comunitario, para niñas y niños en situación de vulnerabilidad." },
  { title: "Visión", content: "En el año 2020 mantendremos una posición líder en Colombia con nuestra estrategia de intervención en educación pública de calidad, contribuyendo a la construcción de espacios para la paz para más de 21.000 beneficiarios en las Instituciones Educativas Públicas del país y las comunidades circundantes." },
  { title: "Especificaciones", content: "Lorem ipsum dolor sit amet" }
];

this.state = {
    selected2: undefined
  };

export default class AccordionCustomHeaderContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined
        };
    }

    onValueChange2(value: string) {
        this.setState({
          selected2: value
        });
    }

  _renderHeader(item, expanded) {
    return (
      <View style={{
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center" ,
        backgroundColor: "#73BEDE" }}>
        <Text style={{ fontWeight: "600" }}>
          {" "}{item.title}
        </Text>
        {expanded
          ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
          : <Icon style={{ fontSize: 18 }} name="add-circle" />}
      </View>
    );
  }
  _renderContent(item) {
    return (
      <Text
        style={{
          backgroundColor: "#e3f1f1",
          padding: 10,
          fontStyle: "italic",
        }}
      >
        {item.content}
      </Text>
    );
  }
  render() {
    return (
      <Container>
        <Header
            centerComponent={{ text: 'Pies Descalzos', style: { color: '#fff' } }}
        /> 
        <Content padder style={{ backgroundColor: "white" }}>
          <ProgressBarAndroid color = "#73BEDE" styleAttr = "Horizontal" progress = { 0.4 } indeterminate = { false } /> 
          <Body> 
           <Text>Progreso: 40%</Text>
          </Body>
          <Accordion
            dataArray={dataArray}
            animation={true}
            expanded={true}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />
            <Item picker>
                <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    placeholder="Select your SIM"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.selected2}
                    onValueChange={this.onValueChange2.bind(this)}
                >
                    <Picker.Item label="$5000" value="key0" />
                    <Picker.Item label="$10000" value="key0" />
                    <Picker.Item label="$20000" value="key1" />
                    <Picker.Item label="$50000" value="key2" />
                    <Picker.Item label="$100000" value="key3" />
                </Picker>
            </Item>
          <Text /*onPress = {this.props.navigation.navigate('Payment')}*/ style={styles.Button}>
            Invertir
          </Text>
        </Content>
        
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white',
      marginTop:30,
      padding: 10,
    },
  
    topText: {
      fontSize:16,
      fontWeight:'bold',
    },
  
    Input: {
      padding:10,
      borderWidth:1,
      borderColor: 'grey',
      marginLeft:10,
      marginRight:10,
    },
    Button: {
      backgroundColor:'blue',
      color: 'white',
      textAlign: 'center',
      fontSize:16,
      fontWeight:'bold',
      padding:10,
      marginLeft:10,
      marginRight:10,
      marginTop:24,
    },
    centerContainer: {
      backgroundColor:'#F0F0F0',
      padding: 10,
      marginTop: 10,
      width: '100%',
    },
    
  });