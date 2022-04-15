import { Container, Text, Image } from '@nextui-org/react';

export const NoFavorites = () => {
  return (
    <Container
      css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      }}
    >
      <Text h1>No hay Favoritos</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
        width={250}
        height={250}
        alt="Pokemon selected"
      />
    </Container>
  );
};
