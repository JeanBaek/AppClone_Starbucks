import React from 'react';
import {StatusBar, Image} from 'react-native';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export const Main = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <SceneHeader>
        <NavigationBar>
          <MenuToggle>
            <Ionicons name="md-menu-sharp" size={40} color="white" />
          </MenuToggle>
          <StarbucksLogo
            source={require('../src/images/starbucksLogoWhite.png')}
          />
          <AlertsToggle>
            <SimpleLineIcons name="bell" size={30} color="white" />
          </AlertsToggle>
        </NavigationBar>
        <Greeting>
          <GreetingText>안녕하세요. 스타벅스입니다.</GreetingText>
        </Greeting>
      </SceneHeader>
      <SceneBody />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: black;
`;

const SceneHeader = styled.View`
  height: 60;
`;

const NavigationBar = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

const MenuToggle = styled.TouchableOpacity`
  margin-left: 15;
`;

const StarbucksLogo = styled.Image`
  width: 200;
  height: 50;
`;

const AlertsToggle = styled.TouchableOpacity`
  margin-top: 5;
  margin-right: 15;
`;

const Greeting = styled.View`
  height: 40;
  background-color: #282828;
  justify-content: center;
  align-items: center;
`;

const GreetingText = styled.Text`
  color: white;
`;

const SceneBody = styled.View``;
