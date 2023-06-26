import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" `,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main">
        Main
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
