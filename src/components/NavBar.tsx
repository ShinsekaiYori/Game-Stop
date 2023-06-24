import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

//1. HStack is for horizontal placement.
//2.Import the image like a regular javscript component
//3. space-between added to perform the same function as flex,
// , padding added because the button went too close to the screen
