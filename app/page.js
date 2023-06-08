"use client";
import { Container, Box, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container>
      <Box borderRadius="lg" bg="#e4dcc9" p={3} mb={6} align="center">
        {" "}
        Hi, I&apos;m a front-end developer based in Argentina!
      </Box>
      <Box>
        <Box textAlign="center">
          <Heading as="h2" variant="page-title">
            Ivan Villa
          </Heading>
          <p>Multimedia Designer (Artist / Developer / Designer)</p>
        </Box>
      </Box>
    </Container>
  );
}
