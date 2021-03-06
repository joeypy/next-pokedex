import { Button, Grid, Card, Row, Text } from '@nextui-org/react';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { GetStaticProps } from 'next';
import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interface';
import { PokemonList } from '../components/pokemon';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title={'Listado de pokemon'}>
      <PokemonList pokemons={pokemons} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => {
    return {
      ...pokemon,
      id: index + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        index + 1
      }.svg`,
    };
  });

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
