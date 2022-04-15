import { Card, Grid } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts';
import { FavoritesPokemons, NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';

const FavoritesPage = () => {
  const [favoritePokemon, setFavoritePokemon] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemon(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokemon - Favorites">
      {favoritePokemon.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritesPokemons pokemons={favoritePokemon}/>
      )}
    </Layout>
  );
};

export default FavoritesPage;
