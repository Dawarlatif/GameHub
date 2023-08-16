import { SimpleGrid, Text } from "@chakra-ui/react";
import useaGames from "../hooks/useaGames";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";

const GameGrid = () => {
  const { game, error, loading } = useaGames();
  const skel = [1, 5, 0, 1, 3, 5, 5, 4, 5];
  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid spacing={3} columns={[1, 2, null, 3]} p={"10px"}>
        {loading && skel.map((s) => <SkeletonCard key={s} />)}
        {game.map((game) => {
          return <GameCard key={game.id} game={game} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
