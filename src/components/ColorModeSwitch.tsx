import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { color } from "framer-motion";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <div>
      <HStack>
        <Switch
          colorScheme="green"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
        <Text>Dark Mode</Text>
      </HStack>
    </div>
  );
};

export default ColorModeSwitch;

//1. We will use Hstack because we want the switch and
// to its side, a label.
//2. To work with Color modes, we use a custom hook defined
// in Chakra.
//3. We take 2 properties, with first for toggle,
// second for current colorMode.
