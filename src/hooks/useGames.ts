import apiClient from "../services/api-client";
import { GameQuery } from "../App";
import { useQuery } from "@tanstack/react-query";
import { Fetchresponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
// rating_top=whole number, rating=floating number

const useGames = (gameQuery: GameQuery) =>
  useQuery<Fetchresponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<Fetchresponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });

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

//8. //14. Imported gamequery so to make it more neat and easy.

//2.

//1.Replace the data hook with query hook as better functionality there.
