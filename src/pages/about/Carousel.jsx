import React from "react";

import {
  BiLogoJava,
  BiLogoJavascript,
  BiLogoPython,
  BiLogoFigma,
  BiLogoGithub,
  BiLogoNodejs,
  BiLogoChrome,
} from "react-icons/bi";
import { SiCsharp } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  IconButton,
  Box,
  Heading,
  HStack,
  Icon,
  Text,
  Stack,
  Image,
  Link,
} from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import "./About.css";

function Carousel() {
  return (
    <Box id="carousel">
      <Flex className="carousel-slide">
        <Icon as={BiLogoJava} w={10} h={10} />
        <Icon as={BiLogoJavascript} w={10} h={10} />
        <Icon as={SiCsharp} w={10} h={10} />
        <Icon as={BiLogoPython} w={10} h={10} />
        <Icon as={FaReact} w={10} h={10} />
        <Icon as={BiLogoFigma} w={10} h={10} />
        <Icon as={BiLogoGithub} w={10} h={10} />
        <Icon as={BiLogoNodejs} w={10} h={10} />
        <Icon as={BiLogoChrome} w={10} h={10} />
      </Flex>
      <Flex className="carousel-slide">
        <Icon as={BiLogoJava} w={10} h={10} />
        <Icon as={BiLogoJavascript} w={10} h={10} />
        <Icon as={SiCsharp} w={10} h={10} />
        <Icon as={BiLogoPython} w={10} h={10} />
        <Icon as={FaReact} w={10} h={10} />
        <Icon as={BiLogoFigma} w={10} h={10} />
        <Icon as={BiLogoGithub} w={10} h={10} />
        <Icon as={BiLogoNodejs} w={10} h={10} />
        <Icon as={BiLogoChrome} w={10} h={10} />
      </Flex>
    </Box>
  );
}

export default Carousel;
