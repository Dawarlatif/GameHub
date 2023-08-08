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
        <GridItem area="sidebar">sidebar</GridItem>
      </Show>
      <GridItem area="main">main</GridItem>
    </Grid>
  );
}

export default App;
