import React, { useState, FunctionComponent } from 'react';
import {
  Button,
  Center,
  Wrap,
  WrapItem,
  Image,
  Text,
  Link,
} from '@chakra-ui/core';

interface IRoversPhoto {
  id: number;
  sol: number;
  camera: any;
  img_src: string;
  earth_date: string;
  rover: any;
}

interface IRoversBlob {
  photos: Array<IRoversPhoto>;
}

type RoversListProps = {};

const RoversList: FunctionComponent<RoversListProps> = (props) => {
  const [roversBlob, setRoversBlob] = useState<IRoversBlob>({ photos: [] });

  const renderRoversBlob = () => {
    return roversBlob.photos.map(
      (rp: IRoversPhoto) => (
        <WrapItem
          p={1}
          m={1}
          alignItems="center"
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          key={rp.id}
        >
          <Center>
            <Image
              alt="Mars Rover"
              rounded="md"
              fallbackSrc="https://via.placeholder.com/150x150"
              src={rp.img_src}
              boxSize={150}
              fit="cover"
            />
          </Center>
          <Text
            textAlign="center"
            mt={2}
            fontSize="sm"
            fontWeight="semibold"
            lineHeight="short"
          >
            <Link href={rp.img_src} breakout="true">
              #{rp.id}
            </Link>
          </Text>
        </WrapItem>
      ),
      []
    );
  };

  const loadRoversBlob = async () => {
    const res = await fetch(
      'https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/photos?sol=1001&&camera=mast&page=1'
    );
    const photosBlob = await res.json();
    setRoversBlob(photosBlob);
  };

  return roversBlob.photos.length ? (
    <Wrap m={50} spacing={20} justify="center">
      {renderRoversBlob()}
    </Wrap>
  ) : (
    <Button
      m={50}
      colorScheme="blue"
      size="lg"
      onClick={() => loadRoversBlob()}
    >
      Load Rovers
    </Button>
  );
};

export default RoversList;
