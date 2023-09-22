import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  searchText: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "sidebar main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "280px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(search) =>
            setGameQuery({ ...gameQuery, searchText: search })
          }
        />
      </GridItem>

      <Show above="lg">
        <GridItem area="sidebar" paddingX={1}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(gen) =>
              setGameQuery({ ...gameQuery, genre: gen })
            }
          />
        </GridItem>
      </Show>

      <GridItem area="main">
        <Box padding={2}>
          <GameHeading gameQuery={gameQuery} />
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelect={(plat) => setGameQuery({ ...gameQuery, platform: plat })}
          />
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
