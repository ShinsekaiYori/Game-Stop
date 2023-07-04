import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Fetchresponse } from "../services/api-client";
import platforms from "../data/platforms";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<Fetchresponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),

    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;

//2

//1.Did the same with platforms.
