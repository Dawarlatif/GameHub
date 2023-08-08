import { HStack, Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image
        boxSize="60px"
        // objectFit='cover'
        src={logo}
        alt="Dan Abramov"
      />
      <Text fontSize="xl">(xl) In love with React & Next</Text>
    </HStack>
  );
};
export default NavBar;
