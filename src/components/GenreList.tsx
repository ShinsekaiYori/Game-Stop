import { list } from "@chakra-ui/react";
import React from "react";
import useGenres from "../hooks/useGenre";

const GenreList = () => {
  const { genres } = useGenres();

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;

//1. To fetch genre, we create a hook similar to one we ceated for fetching the games.
