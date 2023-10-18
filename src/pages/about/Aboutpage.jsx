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
  Flex,
} from "@chakra-ui/react";

import Navigation from "../../comp/nav/Navigation";
import Footer from "../../comp/footer/Footer";
import { RiFilePaper2Fill, RiGraduationCapFill } from "react-icons/ri";
import { PiUserCircleFill } from "react-icons/pi";
import { SiBuildkite } from "react-icons/si";
import { MdWorkspacesFilled } from "react-icons/md";
import usrl from "../../assets/iconamoon_profile-circle-fill.png";
import skillseticons from "../../assets/icons.png";

import Carousel from "./Carousel";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

const Aboutpage = () => {
  // Attributes
  // JSX
  return (
    <Stack
      className="Aboutpage"
      background="linear-gradient(to top, black, #1d1720)"
      color="white"
    >
      {/* SideBanner */}
      <Box id="aside-banner"></Box>
      {/* Content Body */}
      <Stack id="about-content-container">
        {/* Section 1 : Component*/}
        <Flex>
          <Stack gap={0}>
            <Heading
              bgGradient="linear(to-l, #e9462e, #aa205f)"
              bgClip="text"
              zIndex={3}
            >
              <b>About Me</b>
            </Heading>
            <Text zIndex={3}>
              <i>Beneath the Surface...</i>
            </Text>
          </Stack>
          <Image src={usrl} id="about-icon" />
        </Flex>

        {/* Section 2 */}
        <Stack id="skill-section">
          <Heading className="about-sub-title">
            <i>Software Skillset</i>
          </Heading>
          <Flex id="skill-list" className="list">
            {/* Dev Languages */}
            <Stack>
              <Text
                bgGradient="linear(to-l, #e9462e, #e9462e, #aa205f)"
                bgClip="text"
              >
                <b>Dev Languages</b>
              </Text>
              <Flex className="item" id="langs">
                <List>
                  <ListItem>
                    <Text>
                      <b>Javascript</b>
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      <b>HTML</b>
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      <b>CSS</b>
                    </Text>
                  </ListItem>
                </List>
                <List>
                  <ListItem>
                    <Text>
                      <b>Java</b>
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      <b>C#</b>
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      <b>Python</b>
                    </Text>
                  </ListItem>
                </List>
                <List>
                  <ListItem>
                    <Text>
                      <b>MySQL</b>
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      <b>SQL</b>
                    </Text>
                  </ListItem>
                </List>
              </Flex>
            </Stack>
            {/* Frameworks */}
            <Stack>
              <Text
                bgGradient="linear(to-l, #e9462e, #e9462e, #aa205f)"
                bgClip="text"
              >
                <b>Frameworks</b>
              </Text>
              <Flex className="item" id="frameworks">
                <List id>
                  <ListItem>
                    <Text>
                      <b>Material UI</b>
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      <b>Chakra UI</b>
                    </Text>
                  </ListItem>
                </List>
                <List>
                  <ListItem>
                    <Text>
                      <b>React.js</b>
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      <b>React Native</b>
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      <b>Node.js</b>
                    </Text>
                  </ListItem>
                </List>
              </Flex>
            </Stack>
            {/* Tools */}
            <Stack>
              <Text
                bgGradient="linear(to-l, #e9462e, #e9462e, #e9462e, #e9462e, #aa205f)"
                bgClip="text"
              >
                <b>Tools</b>
              </Text>
              <Flex className="item">
                <List>
                  <ListItem>
                    <Text>
                      <b>Figma</b>
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      <b>Git / Github</b>
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      <b>Jira Software</b>
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text>
                      <b>Chrome Dev Tools</b>
                    </Text>
                  </ListItem>
                </List>
              </Flex>
            </Stack>
          </Flex>
          <Flex></Flex>

          {/* Carousel Slide */}
          <Carousel />
          {/* <Box border="1px solid green" id="skill-carousel" objectFit="cover">
            <Image src={skillseticons} />
          </Box> */}
        </Stack>

        {/* Section 3 */}
        <Stack id="education-section">
          <Heading className="about-sub-title">
            <i>Educational History</i>
          </Heading>
          <Flex className="list" gap={5}>
            <Stack>
              <Text
                bgGradient="linear(to-l, #e9462e, #e9462e, #aa205f)"
                bgClip="text"
              >
                <b>Academic Timeline</b>
              </Text>

              {/* Schools : C*/}
              <Flex id="schools">
                <List>
                  <Text>
                    <b>Aledo High School</b>
                  </Text>
                  <Text>
                    <b>Weatherford College</b>
                  </Text>
                  <Text>
                    <b>Louisiana State University</b>
                  </Text>
                </List>
                <List>
                  <Text>
                    <i>(2016-2020)</i>
                  </Text>
                  <Text>
                    <i>(2019-2020)</i>
                  </Text>
                  <Text>
                    <i>(2020-Curr.)</i>
                  </Text>
                </List>
              </Flex>

              {/* Description */}
              <Box id="description">
                <Text>
                  <i>
                    I am originally from the great state of Texas. Born in Fort
                    Worth, Texas I grew up around the DFW metroplex in Dallas.
                    Grand Prarie to be more specific during my transformative
                    years. I was always passionate and had an academic
                    inclination to strive to be my best in anything I apply
                    myself to.
                  </i>
                </Text>
              </Box>
            </Stack>

            <Stack>
              <Text
                bgGradient="linear(to-l, #e9462e, #e9462e, #aa205f)"
                bgClip="text"
              >
                <b>Awards and Certifications</b>
              </Text>
              {/* Awards */}
              <Flex id="awards">
                <List>
                  <Text>
                    <b>Dean's List</b>
                  </Text>
                  <Text>
                    <b>LSU Black Scholar</b>
                  </Text>
                  <Text>
                    <b>Dean's List</b>
                  </Text>
                  <Text>
                    <b>LSU Black Scholar</b>
                  </Text>
                </List>
                <List>
                  <Text>
                    <i>Spring 2021</i>
                  </Text>
                  <Text>
                    <i>Spring 2021</i>
                  </Text>
                  <Text>
                    <i>Spring 2023</i>
                  </Text>
                  <Text>
                    <i>Spring 2023</i>
                  </Text>
                </List>
              </Flex>

              {/*  */}
            </Stack>
          </Flex>
          <Flex id="academ">
            <Icon as={RiFilePaper2Fill} className="academ-icons" />
            <Icon as={RiGraduationCapFill} className="academ-icons" />
          </Flex>
        </Stack>
      </Stack>

      {/* Footer */}
      <Footer />
    </Stack>
  );
};

export default Aboutpage;
