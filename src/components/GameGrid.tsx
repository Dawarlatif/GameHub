import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}
interface GameGenerator {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [game, setGame] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<GameGenerator>("/games")
      .then((res) => setGame(res.data.results))
      .catch((error) => setError(error));
  }, []);
  return (
    <ul>
      {game.map((game) => {
        return <li key={game.id}>{game.name}</li>;
      })}
    </ul>
  );
};

export default GameGrid;
