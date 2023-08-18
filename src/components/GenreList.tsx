import React from "react";
import useaGenre from "../hooks/useGenre";
import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { genres, loading } = useaGenre();

  if (loading) return <Spinner />;

  return (
    <List>
      {genres.map((gen) => (
        <ListItem key={gen.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="36px"
              src={getCroppedImageUrl(gen.image_background)}
              borderRadius={8}
            />
            <Text fontSize={"lg"}>{gen.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
