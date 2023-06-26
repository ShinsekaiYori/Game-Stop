import useGenres from "../hooks/useGenre";

const GenreList = () => {
  const { data } = useGenres();

  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;

//1. To fetch genre, we create a hook similar to one we ceated for fetching the games.
