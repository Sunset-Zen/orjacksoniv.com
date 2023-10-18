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
import findu from "../../assets/Findu-Blaze.png";
import tenb from "../../assets/10BND-Final.png";
import dropn from "../../assets/dropnote-logo1.png";

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

import ProjTitle from "./comp/ProjTitle";
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
      {/* SideBanner */}
      <Box id="aside-banner"></Box>
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
          <Stack id="current-proj" gap={8}>
            {/* FindU */}
            <Stack gap={0}>
              {/* Find U */}
              <ProjTitle
                title="Find U"
                type="Group"
                pos="Lead Dev"
                lead="Aiden Matthews"
                role="Lead UI / UX Designer"
                lang="Flutter"
              />
              {/* Image */}
              <Box id="findu-logo">
                <Image src={findu} />
              </Box>
              {/* Description */}
              <Text>
                <b>Description</b>
              </Text>
              <Box width="85%">
                <Text opacity="70%" fontFamily="Inria Sans">
                  FindU is a mobile application currently in development using
                  Flutter. I’ve had the honor in being brought onto the team as
                  the lead UI / UX designer. The FindU development team is
                  currently led by Aiden Matthews and as stated above we aim to
                  make finding colleges for all incoming freshman seeking higher
                  education.
                </Text>
              </Box>

              {/* Photos */}
              <Flex className="photo">
                <Box></Box>
                <Box></Box>
              </Flex>
            </Stack>

            {/* 10BND */}
            <Stack gap={0}>
              {/* 10BND */}
              <ProjTitle
                title="10BND"
                type="Personal"
                role="Lead Dev"
                lang="React Native"
              />
              <Box id="tenb-logo">
                <Image src={tenb} />
              </Box>
              {/* Description */}
              <Text>
                <b>Description</b>
              </Text>
              <Box width="85%">
                <Text opacity="70%" fontFamily="Inria Sans">
                  10BND is a mobile application I am currently developing with
                  React Native as a simple, easy to use, and in depth time
                  tracker. This tracker would keep record of how long a user
                  spent working on a skill with cool user profiles and
                  achievements to incentivize them to go out and be productive
                  members of society.
                </Text>
              </Box>
              {/* Photos */}
              <Flex className="photo">
                <Box></Box>
                <Box></Box>
              </Flex>
            </Stack>
          </Stack>
        </Stack>

        {/* Section 3 */}
        <Stack>
          <Heading id="dev-section" className="proj-sub-title">
            <i>Developed Projects</i>
          </Heading>
          <Box id="finished-proj">
            {/* DropNote */}
            <ProjTitle
              title="Dropnote"
              type="Group"
              pos="Lead Dev"
              lead="Zeke Abshire"
              role="Software Dev"
              lang="Flutter"
            />
            <Box id="dropnote-logo" overflow="hidden">
              <Image src={dropn} />
            </Box>
            {/* Description */}
            <Text>
              <b>Description</b>
            </Text>
            <Box width="85%">
              <Text opacity="70%" fontFamily="Inria Sans">
                Dropnote was the first full stack project I had the opportunity
                to work on as a Software Developer on a team of very talented
                peers in the CSC field. This team was led by Zeke Abshire in
                which I learned a lot from being introduced to new tools such as
                Firebase, Figma, Flutter, and Dart. I also saw first hand how to
                properly scope team projects in a Agile environment as a leader
                where everyone was allowed to collaborate and successfully
                deliver a finished mobile application for professors dealing
                with confidential files.
              </Text>
            </Box>

            {/* Side Projects */}
            <Stack id="vcs-projects">
              {/* React.js Calculator */}
              <Flex gap={2}>
                <Text
                  className="side-proj"
                  bgGradient="linear(to-l, #e9462e, #aa205f)"
                  bgClip="text"
                  zIndex={3}
                >
                  <i> orjacksoniv.dev </i>
                </Text>
                <Text>| Vite.js + Javascript</Text>
                <Link
                  href="https://github.com/Sunset-Zen/orjacksoniv.com"
                  isExternal
                >
                  <Icon as={BiLogoGithub} transform="scale(1.3)" />
                </Link>
              </Flex>
              <Flex>
                <Box width="75%">
                  <Text opacity="75%" fontFamily="Inria Sans">
                    (You Are Here) Developing a full thought out portfolio
                    website in Vite.js under the React.js umbrella was an
                    experience. Completing this taught me responsive web design,
                    UI/ UX Design when prototyping through Figma, core CSS
                    concepts , Modular component structuring, and made me an
                    overall better front-end dev.
                  </Text>
                </Box>
              </Flex>

              {/* React.js Calculator */}
              <Flex gap={2}>
                <Text
                  className="side-proj"
                  bgGradient="linear(to-l, #e9462e, #aa205f)"
                  bgClip="text"
                  zIndex={3}
                >
                  <i> React.js Calculator </i>
                </Text>
                <Text>| Javascript</Text>
                <Link
                  href="https://github.com/Sunset-Zen/Calculator_I"
                  isExternal
                >
                  <Icon as={BiLogoGithub} transform="scale(1.3)" />
                </Link>
              </Flex>
              <Flex>
                <Box width="75%">
                  <Text opacity="75%" fontFamily="Inria Sans">
                    This calculator program was my very first developed React.js
                    web based application. During implementation, I really
                    learned the core fundamentals of React functional components
                    and the two main Hooks; useState and useEffect.
                  </Text>
                </Box>
              </Flex>

              {/* Rock Dodger */}
              <Flex gap={2}>
                <Text
                  className="side-proj"
                  bgGradient="linear(to-l, #e9462e, #aa205f)"
                  bgClip="text"
                  zIndex={3}
                >
                  <i>Rock Dodger</i>
                </Text>
                <Text>| Javascript</Text>
                <Link
                  href="https://github.com/Sunset-Zen/Rock_Dodger"
                  isExternal
                >
                  <Icon as={BiLogoGithub} transform="scale(1.3)" />
                </Link>
              </Flex>
              <Flex>
                <Box width="75%">
                  <Text opacity="75%" fontFamily="Inria Sans">
                    Rock Dodger is a Javascript, P5.js, and on surface C++ based
                    web application that serves as my first Web based arcade
                    style video game for all to enjoy. :)
                  </Text>
                </Box>
              </Flex>

              {/* Galaga */}
              <Flex gap={2}>
                <Text
                  className="side-proj"
                  bgGradient="linear(to-l, #e9462e, #aa205f)"
                  bgClip="text"
                  zIndex={3}
                >
                  <i>Galaga </i>
                </Text>
                <Text>| Java</Text>
                <Link href="https://github.com/Sunset-Zen/Galalga" isExternal>
                  <Icon as={BiLogoGithub} transform="scale(1.3)" />
                </Link>
              </Flex>
              <Flex>
                <Box width="75%">
                  <Text opacity="75%" fontFamily="Inria Sans">
                    Galaga is my very first personal programming project
                    developed with the Java language and the J Library for its
                    GUI aspects. I personally drew and developed the sprites
                    myself and learned the core skills of OOP through its
                    implementation.
                  </Text>
                </Box>
              </Flex>

              {/* Tic Tac Toe */}
              <Flex gap={2}>
                <Text
                  className="side-proj"
                  bgGradient="linear(to-l, #e9462e, #aa205f)"
                  bgClip="text"
                  zIndex={3}
                >
                  <i>Tic Tac Toe</i>
                </Text>
                <Text>| Python</Text>
                <Link
                  href="https://github.com/Sunset-Zen/Tic-Tac-Toe_Py"
                  isExternal
                >
                  <Icon as={BiLogoGithub} transform="scale(1.3)" />
                </Link>
              </Flex>
              <Flex>
                <Box width="75%">
                  <Text opacity="75%" fontFamily="Inria Sans">
                    This Tic Tac Toe application built using Python is terminal
                    based allowing multiplayer and single player. Throughout
                    this project it taught me the general overall basics of
                    Python development in which I intend to apply in my everyday
                    life outside of the workforce.
                  </Text>
                </Box>
              </Flex>

              {/* BattleShip */}
              <Flex gap={2}>
                <Text
                  className="side-proj"
                  bgGradient="linear(to-l, #e9462e, #aa205f)"
                  bgClip="text"
                  zIndex={3}
                >
                  <i>Battleship</i>
                </Text>
                <Text>| Python</Text>
                <Link
                  href="https://github.com/Sunset-Zen/Battleship_py"
                  isExternal
                >
                  <Icon as={BiLogoGithub} transform="scale(1.3)" />
                </Link>
              </Flex>
              <Flex>
                <Box width="75%">
                  <Text opacity="75%" fontFamily="Inria Sans">
                    This Tic Tac Toe application built using Python is terminal
                    based allowing strictly single player. Throughout this
                    project I really got to the nitty gritty of understanding
                    how to properly debug and use the randm library built into
                    python for full cpu implementation.
                  </Text>
                </Box>
              </Flex>
            </Stack>
          </Box>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default Projectpage;
