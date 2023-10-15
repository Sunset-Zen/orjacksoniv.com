import React from "react";
import "./Home.css";
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

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import logo from "../../assets/img/O-Logo(Edition Pearl) copy.0bdcfc8ee8147103e7b5.png";
import bg from "../../assets/img/pexels-а.jpg";
import GitIcon from "./icons/GitIcon";
import LinkedIcon from "./icons/LinkedIcon";
import MailIcon from "./icons/MailIcon";
import Pitch from "./icons/Pitch";

import { ArrowRightIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import pitch from "../../assets/img/Group.png";

const HomePage = () => {
  // Hooks
  // Attributes
  // JSX
  return (
    <Stack className="Homepage">
      {/* BG Image */}
      <Box id="bg" pos="absolute">
        <Image src={bg} />
      </Box>

      <Navigation />

      <Stack>
        {/* Hero Section */}
        <Box id="hero" color="white">
          <Box id="hero-logo-c" pos="absolute">
            <Image id="hero-logo" src={logo} opacity="50%" />
          </Box>

          <Stack paddingTop={60} pos="relative">
            {/* id = hero-cnt1 */}
            <Container id="hero-cnt1" pos="relative">
              <Text>
                <b>Greetings,</b>
              </Text>
              <Heading>
                <b>
                  I'm <i>Otis Jackson IV,</i>
                </b>
              </Heading>
              <Heading as="h3" size="xl" fontSize="xl">
                <i>Software Engineer & UI/UX Designer</i>
              </Heading>
            </Container>

            {/* id = hero-cnt2 */}
            <Container id="hero-cnt2">
              <Text>
                <b>
                  <i>"Where Elevation is the Standard"</i>
                </b>
              </Text>
              <HStack
                gap="1px"
                opacity="60%"
                width="100%"
                pos="relative"
                // border="1px solid red"
              >
                <Link href="https://github.com/Sunset-Zen" isExternal>
                  <IconButton variant="unstyled" icon={<GitIcon />} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/otis-jackson4/"
                  isExternal
                >
                  <IconButton variant="unstyled" icon={<LinkedIcon />} />
                </Link>
                <Link
                  href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=spiritedhokage@gmail.com"
                  isExternal
                >
                  <IconButton variant="unstyled" icon={<MailIcon />} />
                </Link>
                <motion.a href="#pitch" pos="absolute" marginLeft="90%">
                  {/* <IconButton
                    id="transition"
                    variant="unstyled"
                    icon={<Pitch />}
                  /> */}
                  <Button id="transition" variant="unstyled">
                    <Image src={pitch} />
                  </Button>
                </motion.a>
              </HStack>
            </Container>
          </Stack>
        </Box>

        {/* Pitch Section */}
        <Box id="pitch" color="white" paddingTop="5%">
          <Container>
            <Heading marginBottom={2}>
              <i>My Creative Ambition</i>
            </Heading>
            <Text fontSize="xl">Real Progress Starts With Innovation</Text>
            <Text>
              Welcome I am a computer Science major enrolled in the College of
              Engineering at Louisiana State University with a primary
              concentration in Software Development.{" "}
            </Text>
            <Text>
              As an independent creative-minded artist, my aim is to merge
              concrete creativity with acquired software skills to develop and
              deliver you truly captivating and awe inspiring software
              applications.
            </Text>
            <Heading>Let's Build Together !!</Heading>
            <HStack></HStack>
          </Container>
        </Box>
      </Stack>

      {/* Footer */}
    </Stack>
  );
};

export default HomePage;
