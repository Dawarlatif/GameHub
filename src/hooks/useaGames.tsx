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
  metacritic: number;
}
interface GameGenerator {
  count: number;
  results: Game[];
}
const useaGames = () => {
  const [game, setGame] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<GameGenerator>("/games")
      .then((res) => {
        setGame(res.data.results);
        setLoading(false);
      })
      .catch((error) => setError(error.message));
  }, []);
  return { game, error, loading };
};

export default useaGames;
