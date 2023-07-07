import { Box } from "@chakra-ui/react";
import React, { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
      borderRadius={10}
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;

//1.We removed fixed card size because we did not assign size
// to the size pnale and fixed it.Now, with fixed width
//the grid takes all the available face.So , the space gets equally distributed
// between the 3 containers.
