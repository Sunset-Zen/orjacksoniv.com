import React from "react";
import {
  Box,
  Image,
  HStack,
  IconButton,
  Icon,
  Link,
  Flex,
  Text,
  Container,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

import "./navi.css";
import img1 from "../../assets/img/O-Logo(Edition Pearl) copy.0bdcfc8ee8147103e7b5.png";
import SideMenu from "./SideMenu";
import ToggleIcon from "./icons/ToggleIcon";
import { HamburgerIcon } from "@chakra-ui/icons";
// import { Container } from "postcss";

const Navigation = () => {
  // Attributes
  // Hooks
  // JSX
  return (
    <Flex
      zIndex="5"
      className="nav container"
      pos="absolute"
      // border="1px solid white"
    >
      <Link href="/">
        <Box id="nav-logo" objectFit="cover">
          <Image src={img1} />
        </Box>
      </Link>

      {/* Desktop / Tablet Nav */}
      <Flex id="dev-nav">
        <Link href="/">
          <Text fontSize="2xl" className="nav-links">
            <b>Home</b>
          </Text>
        </Link>
        <Link href="/about-me">
          <Text fontSize="2xl" className="nav-links">
            <b>About Me</b>
          </Text>
        </Link>
        <Link href="/projects">
          <Text fontSize="2xl" className="nav-links">
            <b>Projects</b>
          </Text>
        </Link>
        <Link href="/exp">
          <Text fontSize="2xl" className="nav-links">
            <b>Experience</b>
          </Text>
        </Link>
      </Flex>

      {/* Mobile Nav */}
      <SideMenu />
    </Flex>
    // </Container>
  );
};

export default Navigation;
