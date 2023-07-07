import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>

      <SearchInput />
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
