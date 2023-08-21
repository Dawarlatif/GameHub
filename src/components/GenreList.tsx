import React, { useState } from "react";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import useGenre, { Genre } from "../hooks/useGenre";

interface Props {
  onSelectedGenre: (gen: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, loading } = useGenre();

  if (loading) return <Spinner />;

  return (
    <List>
      {data.map((gen) => (
        <ListItem key={gen.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="36px"
              src={getCroppedImageUrl(gen.image_background)}
              borderRadius={8}
            />
            <Button
              variant={"link"}
              fontSize={"lg"}
              onClick={() => onSelectedGenre(gen)}
              fontWeight={gen?.id === selectedGenre?.id ? "bold" : "normal"}
            >
              {gen.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
