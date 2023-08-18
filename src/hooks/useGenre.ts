import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Genre {
  id: number;
  name: string;
  image_background:string
}
interface GenreGenerator {
  count: number;
  results: Genre[];
}
const useaGenre = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<GenreGenerator>("/genres")
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((error) => setError(error.message));
  }, []);

  return { genres, error, loading };
};

export default useaGenre;
