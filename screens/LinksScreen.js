import React from 'react';
import { Text, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, ProgressBarAndroid} from 'native-base';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <Container>
        <Content>
        <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'}} />
                <Body>
                  <Text style={{fontSize:18}}>Pepita Pérez</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Text style={{fontSize:20}}>Pies descalzos</Text>
            </CardItem>
            <CardItem button onPress={() => this.props.navigation.navigate('Project')} cardBody>
              <Image source={{uri: 'http://iformtech.com.gr/wp-content/uploads/2018/01/Project-Scope-Management-Cover.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <ProgressBarAndroid color = "#73BEDE" styleAttr = "Horizontal" progress = { 0.4 } indeterminate = { false } /> 
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up"/>
                  <Text>12 Aportes</Text>
                </Button>
              </Left>
              <Right>
                <Button transparent>
                  <Icon active name="logo-usd"/>
                  <Text>40M</Text>
                </Button>
              </Right>  
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg'}} />
                <Body>
                  <Text style={{fontSize:18}}>Pepita Pérez</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Text style={{fontSize:20}}>Pies descalzos</Text>
            </CardItem>
            <CardItem button onPress={() => this.props.navigation.navigate('Project')} cardBody>
              <Image source={{uri: 'http://iformtech.com.gr/wp-content/uploads/2018/01/Project-Scope-Management-Cover.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <ProgressBarAndroid color = "#73BEDE" styleAttr = "Horizontal" progress = { 0.4 } indeterminate = { false } /> 
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up"/>
                  <Text>12 Aportes</Text>
                </Button>
              </Left>
              <Right>
                <Button transparent>
                  <Icon active name="logo-usd"/>
                  <Text>40M</Text>
                </Button>
              </Right>  
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
