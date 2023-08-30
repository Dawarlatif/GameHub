import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorSwitchMode from "./ColorSwitchMode";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack p={"10px"}>
      <Image
        boxSize="60px"
        // objectFit='cover'
        src={logo}
        alt="Dan Abramov"
      />
      <SearchInput onSearch={onSearch} />
      <ColorSwitchMode />
    </HStack>
  );
};
export default NavBar;
