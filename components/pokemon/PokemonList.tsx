import { Grid } from '@nextui-org/react';
import { FC } from 'react';
import { PokemonCard } from '.';
import { SmallPokemon } from '../../interface';

interface Props {
  pokemons: SmallPokemon[];
}
export const PokemonList: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} justify="flex-start">
      {pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </Grid.Container>
  );
};
