import { SimpleGrid, Text } from "@chakra-ui/react";
import useaGames from "../hooks/useaGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { game, error } = useaGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid spacing={5} columns={[1, 2, null, 3]} p={"10px"}>
        {game.map((game) => {
          return <GameCard key={game.id} game={game} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
