import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue, Flex } from "@chakra-ui/react";
import { useState } from "react";

const Logo = () => {
  //const [img,setImg] = useState(`/vvvv.svg`)
  const [mode, setMode] = useState(false);
  const setImg = () => {
    if (mode === false) {
      setMode(true);
    } else {
      setMode(false);
    }
  };

  //////////////////// cambiar logo segun el modo
  const keycapImg = `/vvvv.svg`;
  return (
    <Link href="/" scroll={false}>
      <Flex align={"center"}>
        <Image src={keycapImg} width={40} height={40} alt="logo" />
        <Text
          color={useColorModeValue("gray.800", "white.Alpha.900")}
          fontWeight="bold"
          ml={3}
        >
          Ivan Villa
        </Text>
      </Flex>
    </Link>
  );
};

export default Logo;
