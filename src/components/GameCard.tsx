import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
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

//7. In the rawg API, under the results property, we had parent_platforms like pc,ps4,xbox
// in the game object. Platform is a more comprhensive list, like ps versions, xbox versions, etc
//I want to display icons on the card, so that would be parent_platforms.

//8.We created a seprate component for the platform icons and removed the mapping to be placed in that componenet.
//9.We crated a seprate component for the score
//10.We want the icons and score to be side by side so we warp them in a horizontal stack.
//
