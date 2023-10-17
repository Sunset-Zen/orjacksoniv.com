import React from "react";
import "./About.css";

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
} from "@chakra-ui/react";

import Navigation from "../../comp/nav/Navigation";
import Footer from "../../comp/footer/Footer";

const Aboutpage = () => {
  // Attributes
  // JSX
  return (
    <Stack
      className="Aboutpage"
      background="linear-gradient(to top, black, #1d1720)"
      color="white"
    >
      {/* Content Body */}
      <Stack>{/* <Heading>About me</Heading> */}</Stack>
      {/* Footer */}
      <Footer />
    </Stack>
  );
};

export default Aboutpage;
