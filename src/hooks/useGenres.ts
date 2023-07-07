import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import ms from "ms";
import { Fetchresponse } from "../services/api-client";
import Genre from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;

//2.

//1. The object we return from this hook has three things - data, genre, isLoading.
// This object has the same shape as query objects we get from R query.By that, we are talking about that the shape of
// query objects typically includes the following properties - data, isloaing, isError, error, refetch, isFetching, status.
// Now, we replace ({ data: genres, isLoading: false, error: null }); by a call to useQuery.

//2. we add querykey as genres and queryFn something simple.
//Now, we got to GenreList

//3. In GenreList, an error of data of being type any shows up.So, we assign a
// generic type argument of <Genre[]> here.

//4.We did wrong as we want an object having those 4 properties, not a genre array.
// so, we want to get Fetchresponse<Genre>, no array as the type we use here is converted to array for results property.

//5. Set initialData to genre so that we avoid spinner . And we get an error on queryKey.
// The problem is  -  RQuery expect a Fetchresponse of type genre and the initiaData: genre is different.The thing is, genres do not have the
// properties in the interface format. So, either  we can 1) wrap this inisde an object with 2 rproperties, ex- { count: genres.length, results: genres },
// 2)Is to update the data in the genre hardcoded file  to exactly what we get from backend

//6. When we provide initialData, this data is inserted into the cache and because we gave data staletime of 24 hours, it will remain fresh for 24 hours
// and no request will be made to backend to fetch genres.
