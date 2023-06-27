import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

//1. HStack is for horizontal placement.
//2.Import the image like a regular javscript component
//3. space-between added to perform the same function as flex,
// , padding added because the button went too close to the screen

//4. Added the search component and removed justify-content-between as 3 componenet already there.
