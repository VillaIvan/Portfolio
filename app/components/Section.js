import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

const Section = ({ children, delay = 0 }) => (
  <ChakraBox
    initial={{ x: -10, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    textAlign="center"
    mt={20}
  >
    {children}
  </ChakraBox>
);
export default Section;
