import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import { Genre } from "../hooks/useGenre";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, loading } = useGames(gameQuery);
  const skel = [1, 5, 0, 1, 3, 5, 5, 4, 5];
  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid spacing={3} columns={[1, 2, null, 3]} p={"10px"}>
        {loading && skel.map((s) => <SkeletonCard key={s} />)}
        {data.map((game) => {
          return <GameCard key={game.id} game={game} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
