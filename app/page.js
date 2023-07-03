"use client";
import NextLink from "next/link";
import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  Image,
  chakra,
  shouldForwardProp,
  Center,
  Button,
  Flex,
  Icon,
} from "@chakra-ui/react";

import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion, isValidMotionProp } from "framer-motion";
import { DownloadIcon } from "@chakra-ui/icons";
import Section from "./components/Section";

import Paragraph from "./components/paragraph";
import Head from "next/head";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function Home() {
  const vvvv = `/vvvv.svg`;
  return (
    <Container overflowX={"hidden"}>
      <Box
        borderRadius="lg"
        p={3}
        mb={6}
        align="center"
        bg={useColorModeValue("#24221b", "#e4dcc9")}
        color={useColorModeValue("#e4dcc9", "#24221b")}
      >
        {" "}
        Hi, I&apos;m a front-end developer based in Argentina!
      </Box>
      <Box>
        <Box textAlign="center" mb="60px">
          <Heading
            as="h2"
            variant="page-title"
            color={useColorModeValue("#24221b", "#e4dcc9")}
          >
            Ivan Villa
          </Heading>
          <p>Multimedia Designer (Artist / Developer / Designer)</p>
        </Box>

        <ChakraBox
          animate={{
            scale: [1, 1.2, 1.5, 1.2, 1],
            rotate: [0, 150, 270, 360, 0],
            opacity: [0.5, 1, 1, 1, 0.5],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Center>
            <Image
              maxW="200px"
              display="inline-block"
              borderRadius="full"
              src={vvvv}
              alt="logo"
            />
          </Center>
        </ChakraBox>
        <Section delay={0.8}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <Paragraph>
            Hola! Soy un desarrollador front-end freelance y diseñador
            multimedial egresado de la Facultad de Artes en la Universidad
            Nacional de La Plata. Mis pilares son el arte y desarrollar
            soluciones multimediales orientadas a experiencias web. Amo la
            musica y actualmente estoy buscando trabajo xd.
          </Paragraph>
          <Box align="center" my="10">
            <NextLink href="/">
              <Button
                rightIcon={<DownloadIcon />}
                bg={useColorModeValue("#24221b", "#e4dcc9")}
                color={useColorModeValue("#e4dcc9", "#24221b")}
                _hover={"none"}
              >
                Descargar CV
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.8}>
          <Heading as="h3" variant="section-title">
            On the Web
          </Heading>
          <Flex justifyContent={"space-evenly"}>
            <Button
              as={NextLink}
              href="https://github.com/VillaIvan"
              target="_blank"
              py={8}
            >
              <Icon as={FaGithub} boxSize={8} />
            </Button>
            <Button
              as={NextLink}
              href="https://instagram.com/ivanfvilla"
              target="_blank"
              py={8}
            >
              <Icon as={FaInstagram} boxSize={8} />
            </Button>
            <Button
              as={NextLink}
              href="https://twitter.com/OMGiFeelBlessed"
              target="_blank"
              py={8}
            >
              <Icon as={FaTwitter} boxSize={8} />
            </Button>
            <Button
              as={NextLink}
              href="https://www.linkedin.com/in/ivan-villa-746430238/"
              target="_blank"
              py={8}
            >
              <Icon as={FaLinkedin} boxSize={8} />
            </Button>
          </Flex>
        </Section>
      </Box>
    </Container>
  );
}
