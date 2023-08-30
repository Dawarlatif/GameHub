import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorSwitchMode from "./ColorSwitchMode";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack p={"10px"}>
      <Image
        boxSize="60px"
        // objectFit='cover'
        src={logo}
        alt="Dan Abramov"
      />
      <SearchInput />
      <ColorSwitchMode />
    </HStack>
  );
};
export default NavBar;
