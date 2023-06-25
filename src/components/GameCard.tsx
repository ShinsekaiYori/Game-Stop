import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;

//1. We should pass a game object as a prop to the component
//2. Imported the game interface from a hook, weird.
//3. We will return a card compoenent, so use Chakra components
// for it. Also, edit the interface in useGames.ts to inlcude
// background_image
//4. Right now, i have made a basic skeleton of the card.

//5. We apply a borderradius of 10 to make them smooth, but they become smooth only at the bottom.
//6. The roundness is not at the top? The image is bigger than the container.
// We set overflow to hidden(CSS Basics) and now, round corner at the top.
