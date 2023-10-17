import React from "react";
import "./Project.css";

// import { Stack, Heading } from "@chakra-ui/react";
import {
  Box,
  Text,
  Heading,
  HStack,
  Container,
  Stack,
  Icon,
  Image,
  IconButton,
  Link,
  Button,
  Flex,
} from "@chakra-ui/react";

import Navigation from "../../comp/nav/Navigation";
import Footer from "../../comp/footer/Footer";

const Projectpage = () => {
  return (
    <Stack className="Projectpage">
      {/* Content Body */}
      <Stack>
        {/* Section 1 */}
        <Flex>
          <Stack>
            <Heading>Projects</Heading>
            <Text>Products of My Creative Ambition...</Text>
          </Stack>
        </Flex>
        {/* Section 2 */}
        <Stack>
          <Heading>Under Development</Heading>
        </Stack>
        {/* Section 3 */}
        <Stack>
          <Heading>Developed Projects</Heading>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default Projectpage;
