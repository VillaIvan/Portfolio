import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate (20deg);
  }
`;

const Logo = () => {
  const keycapImg = `/keycap${useColorModeValue("", "-dark")}.png`;
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
