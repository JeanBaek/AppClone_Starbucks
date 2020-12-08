import React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';

export const Loading = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <StarbucksLogoImage
        source={{
          uri:
            'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png',
        }}
      />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

const StarbucksLogoImage = styled.Image`
  width: 150;
  height: 150;
`;
