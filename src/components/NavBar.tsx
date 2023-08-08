import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorSwitchMode from "./ColorSwitchMode";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} p={"10px"}>
      <Image
        boxSize="60px"
        // objectFit='cover'
        src={logo}
        alt="Dan Abramov"
      />
      <ColorSwitchMode />
    </HStack>
  );
};
export default NavBar;
