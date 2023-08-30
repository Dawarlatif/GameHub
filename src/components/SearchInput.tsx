import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        placeholder="Search game..."
        size="md"
        borderRadius={20}
        variant={"filled"}
      />
    </InputGroup>
  );
};

export default SearchInput;
