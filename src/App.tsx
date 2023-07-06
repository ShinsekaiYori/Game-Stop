import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" `,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box paddingLeft={3}>
          <GameHeading />
          <Flex marginBottom={2}>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>

            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;

// 1. templeareas - to define the layout of our grid.
//2.  To ensure our side panel is shown only on large devices
// , we wrap it inside a show  component.
//3. attribute like above and below.Above means lg and above.

//4. Refactoring - to make the variables at one place, we will make a quey object
// that contains all the information we need to query the games.

//5. For applying searching function, we may have to first go to Navbar and then to SeaechInput.
// This is not idea or SearchInput is not a direct child of App componenet, NavBar is.

//2.

//1. We change genre type to number from Genre as we only need genre_id.
//2. DDifference between undefined and null. Undefined- absence of a value.Null-intentional absence of a value
