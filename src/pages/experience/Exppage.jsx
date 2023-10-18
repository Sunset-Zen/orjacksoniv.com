import React from "react";
import "./Exp.css";

import Navigation from "../../comp/nav/Navigation";
import Footer from "../../comp/footer/Footer";
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
import usrl from "../../assets/cryptocurrency_xp.png";

const Exppage = () => {
  return (
    <Stack className="Exppage">
      {/* SideBanner */}
      <Box id="aside-banner"></Box>
      {/* Content Body */}
      <Stack id="exp-content-container">
        {/* Section 1 */}
        <Flex>
          <Stack gap={0}>
            <Heading
              bgGradient="linear(to-l, #e9462e, #aa205f)"
              bgClip="text"
              zIndex={3}
            >
              Experience
            </Heading>
            <Text zIndex={3}>Hands on Real World Issues...</Text>
          </Stack>
          <Image src={usrl} id="exp-icon" />
        </Flex>

        {/* Section 2 */}
        <Stack>
          <Heading id="internships" className="exp-sub-title">
            <i>Internships</i>
          </Heading>
          {/* Internship 1 */}
          <Stack>
            <Text>
              <b>Software Engineer Intern / Summer 2023</b>
            </Text>
            <Text color="#608CFF">
              <i>Lockheed Martin</i>
            </Text>

            <Text
              bgGradient="linear(to-l, #e9462e, #aa205f)"
              bgClip="text"
              zIndex={3}
            >
              <b>Description</b>
            </Text>
            <Box width="88%">
              <Text className="summary" opacity="70%">
                <i>
                  Gained experience on the Full Stack Engineering team learning
                  the skills of web development working with Javascript,
                  Typescript, and CSS through React.js to develop a useful
                  interactive frontend UI Library that would be used for the
                  Lockheed company software applications. Contributed and
                  successfully developed a timezone based component in the UI
                  Library the Full Stack Engineering team was in development on.
                </i>
              </Text>
            </Box>
            <Text
              bgGradient="linear(to-l, #e9462e, #aa205f)"
              bgClip="text"
              zIndex={3}
            >
              <b>Acquired Skills</b>
            </Text>
            <Flex gap={3}>
              <Text>Javascript</Text>
              <Text>Tyescript</Text>
              <Text>React.js</Text>
            </Flex>
          </Stack>

          {/* Internship 2 */}
          <Stack className="second-display">
            <Text>
              <b>Testing & Automation Intern / Summer 2022</b>
            </Text>
            <Text color="#608CFF">
              <i>Lockheed Martin</i>
            </Text>

            <Text
              bgGradient="linear(to-l, #e9462e, #aa205f)"
              bgClip="text"
              zIndex={3}
            >
              <b>Description</b>
            </Text>
            <Box width="88%">
              <Text className="summary" opacity="70%">
                <i>
                  Gained experience on the Systems Integration team learning
                  web-automation working with the Python / C based framework
                  Selenium Robot to run various tests on classified applications
                  through code translation. Successfully implemented an in-depth
                  automated test on a key function located in one of Lockheed’s
                  classified applications.
                </i>
              </Text>
            </Box>
            <Text
              bgGradient="linear(to-l, #e9462e, #aa205f)"
              bgClip="text"
              zIndex={3}
            >
              <b>Acquired Skills</b>
            </Text>
            <Flex gap={3}>
              <Text>Robot Selenium</Text>
              <Text>Gitlab</Text>
              <Text>Test Automation</Text>
              <Text>Scrum</Text>
            </Flex>
          </Stack>
        </Stack>

        {/* Section 3 */}
        <Stack>
          <Heading id="oc-jobs" className="exp-sub-title">
            <i>On-Campus Jobs</i>
          </Heading>
          {/* Internship 1 */}
          <Stack>
            <Text>
              <b>
                ITS Print Desk Assistant / <i>Spring 2022-Current</i>
              </b>
            </Text>
            <Text color="#A772FF">
              <i>Louisiana State University</i>
            </Text>
            <Text
              bgGradient="linear(to-l, #e9462e, #aa205f)"
              bgClip="text"
              zIndex={3}
            >
              <b>Description</b>
            </Text>
            <Box width="88%">
              <Text className="summary" opacity="70%">
                <i>
                  Working as an ITS Print Desk Assistant, I've gained valuable
                  experience in customer service learning to utilize software
                  applcations such as Microsoft Teams for effective
                  communication amongst coworkers and data analysts and Adobve
                  Photoshop for the production of printing large format posters
                  intended for upcoming conventions.
                </i>
              </Text>
            </Box>
            <Text
              bgGradient="linear(to-l, #e9462e, #aa205f)"
              bgClip="text"
              zIndex={3}
            >
              <b>Acquired Skills</b>
            </Text>
            <Flex gap={3}>
              <Text>Adobe Photoshop</Text>
              <Text>Customer Service</Text>
              <Text>Microsoft Teams</Text>
            </Flex>
          </Stack>
          {/* Internship 2 */}
          <Stack className="second-display" id="res">
            <Text>
              <b>
                RES Life Desk Assistant / <i>Spring 2021-Fall 2022</i>
              </b>
            </Text>
            <Text color="#A772FF">
              <i>Louisiana State University</i>
            </Text>

            <Text
              bgGradient="linear(to-l, #e9462e, #aa205f)"
              bgClip="text"
              zIndex={3}
            >
              <b>Description</b>
            </Text>
            <Box width="88%">
              <Text className="summary" opacity="70%">
                <i>
                  RES Life offered me my first job as a Desk Assistant. I've
                  gained valuable experience in information tracking, storage
                  management, and customer service staying up late nights,
                  working long shifts, submitting tenant service requests, and
                  replacing many lost dormatory keys.
                </i>
              </Text>
            </Box>
            <Text
              bgGradient="linear(to-l, #e9462e, #aa205f)"
              bgClip="text"
              zIndex={3}
            >
              <b>Acquired Skills</b>
            </Text>
            <Flex gap={3}>
              <Text>Customer Service</Text>
              <Text>Storage Management</Text>
            </Flex>
          </Stack>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default Exppage;
