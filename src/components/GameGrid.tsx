import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding="10px"
        spacing={5}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              {" "}
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
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

//11. We made a skeleton compoenet and for rendering it in the grid,
// we need to know the loading state so import it too.

//12.First intialize the skeleton number in an array for verify, then just
// put the dynamic conditon of isloading and ising the gamecard skeleton to true.

//13. When refrshed , we see 6 skeleton loading.number and sizes are wrong.
//

//14. Imported gamequery so to make it more neat and easy.
