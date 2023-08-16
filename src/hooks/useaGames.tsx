import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}
interface GameGenerator {
  count: number;
  results: Game[];
}
const useaGames = () => {
  const [game, setGame] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<GameGenerator>("/games")
      .then((res) => setGame(res.data.results))
      .catch((error) => setError(error.message));
  }, []);
  return { game, error };
};

export default useaGames;
