import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

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

const useGames = () => useData<Game>("/games");

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
