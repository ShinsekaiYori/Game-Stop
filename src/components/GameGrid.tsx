import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;

//1. 12 state variables, one for game grid, second for error.

//2. An effect hook for a fetch request to the backend.

//3. .then( res => setGames()) -> inside setGames(), we now
//   have to use TS to define an interface that represent the
//   shape of the response object.

//4. We will create an interface that will represent the
// the response object(Which you can see on games section)
// of RAWG api.

// 5. We define an interface for game fetching and then
// define the above game interface, because we need to define
// it in the second one.

//6. Add <FetchGamesResponse> for the shape of response
// object to be that of FetchgamesResponse object.
