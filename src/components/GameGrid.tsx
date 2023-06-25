import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
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

//7. The markup knows a lot of HTTP to and fro.Our components
// should primarily responsible for "returning markup" and
// handling user interaction at a high level.
// 2 option - a. move the logic of http req into a service
// b.moving the statevariable and effect inside a hook.
// So, hooks, apart from sharing functionality across components
// , but also for sperating concern and making code more modular

//8. Now, the component is lot cleaner, as it knows nothing
//about making HTTP  request.

//9. We now change the ul to SimpleGrid component and
// change the li to GameCard component.
//10. In columns, we hardcoded 3, later, we added an object
//
