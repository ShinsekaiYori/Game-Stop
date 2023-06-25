import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;

        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;

//1.We move the game interface here because i have the main
// functionality for fetching games here.
//2. We should return error and object so that we can use them
// in our object.

//3. Added dependencies to the effect.
//4. Added controller and cleanup function of controller.
//5.Check the working and verify in Network dev tool.

//6. We are adding the symbols to the gamaecard so we add additonal props to the interface.
// parent_platforms is not a platform array, it is an array of objects where each object has a property
// called platform of the type Platform, which we defined above it. Confusing api.
