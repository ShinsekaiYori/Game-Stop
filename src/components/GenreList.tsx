import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import Genre from "../entities/Genre";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  if (isLoading) return <Spinner />;

  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={2}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

//1. To fetch genre, we create a hook similar to one we ceated for fetching the games.

//2.Replcing ul with list component gives a list without bullet componenet

//3. To add padding to the side - 1.To the list

//4.Changed text to button and used "varaint" attribute to make them
//look like links.

//5.Create an prop for the genre selected and to send return it on clicking

//6.To highlight the genre, create a prop and then pass it in the condition of the button
// it can be null as well so optional is good.

//7. "Massive Multiplayer" was sticking out.So, instead of prevously trying to use nowrap
// use "normal". Also, it is deafult centre-centered so textalign=left.

//8.objectFit="cover" - images are scaled to fill the container while preserving the aspect ratio.

//2

//1. Came from useGnere hook, found error in data - being of any type - in the hook , assigned a generic type parameter.

//2. We get an error on data?.map. We see data has 4 properties but what we need are the genre.So, that means,
// we need is not a genre array but an object containing those 4 properties, ie.e the data.
