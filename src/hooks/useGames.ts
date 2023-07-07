import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Fetchresponse } from "../services/api-client";
import APIClient from "../services/api-client";
import ms from "ms";
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

// rating_top=whole number, rating=floating number

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<Fetchresponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });
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

//8. //14. Imported gamequery so to make it more neat and easy.

//2.

//1.Replace the data hook with query hook as better functionality there.
//2. We replace query with Infinitequery . We shld have our query function receive page no. as parameter.
//3. We include page in the params and set it to pageParam and then include getNextPageParam param.Rquery calls this function
// to compute the next page.
//4. It has 2 parameters - lastPage and allPages. allPages contains data for each page we retrieved.
//5. Added next:string | undefined to FetchResponse, so the last page condition can be solved.
