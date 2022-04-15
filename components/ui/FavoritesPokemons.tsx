import { Grid, Card } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC } from 'react';

interface Props {
  pokemons: number[];
}

export const FavoritesPokemons: FC<Props> = ({ pokemons }) => {
  const router = useRouter();
  return (
    <>
      <Grid.Container gap={2} direction="row" justify="flex-start">
        {pokemons.map((id: number) => (
          <Grid xs={6} sm={3} md={2} xl={1} key={id} onClick={() => router.push(`/pokemon/${id}`)}>
            <Card hoverable clickable css={{ padding: 10 }}>
              <Card.Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                width={'100%'}
                height={140}
              />
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
};
