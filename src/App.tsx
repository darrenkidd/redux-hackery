import React from 'react';
import './App.css';
import { Box, Image, Text, Center } from '@chakra-ui/core';

function App() {
  return (
    <Center>
      <Box
        p={4}
        m={5}
        alignItems="center"
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Image
          alt="Mars Rover"
          rounded="md"
          fallbackSrc="https://via.placeholder.com/400x197"
          src="https://mars.nasa.gov/imgs/2017/05/PIA21635-br2.jpg"
        />
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          Mars Rover Photos
        </Text>
      </Box>
    </Center>
  );
}

export default App;
