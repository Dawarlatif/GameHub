import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "sidebar main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="sidebar" bg="blue">
          sidebar
        </GridItem>
      </Show>
      <GridItem area="main" bg="grey  ">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
