import React from "react";
import "./Project.css";

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
import { RiFilePaper2Fill, RiGraduationCapFill } from "react-icons/ri";
import { PiUserCircleFill } from "react-icons/pi";
import { SiBuildkite } from "react-icons/si";
import { MdWorkspacesFilled } from "react-icons/md";
import usrl from "../../assets/ant-design_build-twotone.png";
import skillseticons from "../../assets/icons.png";

// import Carousel from "./Carousel";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

const Projectpage = () => {
  return (
    <Stack className="Projectpage">
      {/* Content Body */}
      <Stack id="project-content-container">
        {/* Section 1 */}
        <Flex>
          <Stack gap={0}>
            <Heading
              bgGradient="linear(to-l, #e9462e, #aa205f)"
              bgClip="text"
              zIndex={3}
            >
              <b>Projects</b>
            </Heading>
            <Text zIndex={3}>
              <i>Products of My Creative Ambition...</i>
            </Text>
          </Stack>
          <Image src={usrl} id="project-icon" />
        </Flex>

        {/* Section 2 */}
        <Stack id="active-section">
          <Heading className="proj-sub-title">
            <i>Under Development</i>
          </Heading>
          <Box id="current-proj"></Box>
          {/* Find U */}
          {/* 10BND */}
          {/* Probe */}
        </Stack>
        {/* Section 3 */}
        <Stack>
          <Heading id="dev-section" className="proj-sub-title">
            <i>Developed Projects</i>
          </Heading>
          <Box id="finished-proj"></Box>
          {/* Dropnote */}
          {/* Java */}
          {/* Javascript */}
          {/* Python */}
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default Projectpage;
