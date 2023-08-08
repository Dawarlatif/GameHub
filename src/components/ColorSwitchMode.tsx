import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorSwitchMode = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        size="md"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>Switch Mode</Text>
    </HStack>
  );
};

export default ColorSwitchMode;
