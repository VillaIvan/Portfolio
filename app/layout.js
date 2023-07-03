"use client";

import { Container, Box } from "@chakra-ui/react";
import { Providers } from "./providers";
import { IBM_Plex_Mono } from "next/font/google";
import Navbar from "./components/NavBar";

export const ibm_plex_mono = IBM_Plex_Mono({
  weight: ["700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Ivan Villa - Homepage",
  description:
    "Official portfolio of the artist designer and developer, Ivan Villa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ibm_plex_mono.className}>
        <Providers>
          <Box as="main" pb={8}>
            <Navbar />
            <Container maxW="container.md" pt={20}>
              {children}
            </Container>
          </Box>
        </Providers>
      </body>
    </html>
  );
}
