import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelect: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelect, selectedPlatform }: Props) => {
  const { data, loading } = usePlatform();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsFillCaretDownFill />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data.map((plat) => (
          <MenuItem key={plat.id} onClick={() => onSelect(plat)}>
            {plat.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
