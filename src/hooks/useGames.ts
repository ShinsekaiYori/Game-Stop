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
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
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

//7. Now, we have a property called maetcritic, or critic score.

//We create a state to track loading state. For the skeleton, we will
// create a seperate component.
