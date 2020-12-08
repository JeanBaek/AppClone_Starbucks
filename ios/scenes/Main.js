import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styled from 'styled-components/native';

export const Main = () => {
  return (
    <Container>
      <SceneHeader>
        <NavigationBar>
          <MenuToggle />
          <StarbucksLogo
            source={{uri: 'https://www.gigworks.co/img/buy/sb.png'}}
          />
          <AlertsToggle />
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
  border: purple;
  height: 60;
`;

const NavigationBar = styled.View``;

const MenuToggle = styled.TouchableOpacity``;

const StarbucksLogo = styled.Image``;

const AlertsToggle = styled.TouchableOpacity``;

const Greeting = styled.View``;

const GreetingText = styled.Text`
  color: white;
`;

const SceneBody = styled.View``;
