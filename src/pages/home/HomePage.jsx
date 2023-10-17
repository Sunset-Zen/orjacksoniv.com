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
import Footer from "../../comp/footer/Footer";

const HomePage = () => {
  // Hooks
  // Attributes
  // JSX
  return (
    // <Container>
    <Stack className="Homepage" gap={0}>
      <Stack gap={0}>
        {/* Hero Section */}
        <Box id="hero" color="white">
          <Box id="hero-logo-c" pos="absolute">
            <Image id="hero-logo" src={logo} opacity="40%" />
          </Box>

          <Stack pos="relative" zIndex={4}>
            {/* id = hero-cnt1 */}
            <Container id="hero-cnt1" pos="relative" zIndex={4}>
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
                  <Button id="transition" variant="unstyled">
                    <Image src={pitch} />
                  </Button>
                </motion.a>
              </HStack>
            </Container>
          </Stack>
          {/* <Image id="bg" src={bg} pos="relative" /> */}
        </Box>

        {/* SideBanner */}
        <Box id="side-banner"></Box>

        {/* Pitch Section */}
        <Box id="pitch" color="white" paddingTop="5%">
          <Container>
            <Heading id="pitch-heading" marginBottom={2}>
              <i>
                <b>My Creative Ambition</b>
              </i>
            </Heading>
            <Text id="pitch-subheading" fontSize="xl">
              Real Progress Starts With Innovation
            </Text>
            <Stack className="pitch-text">
              <Text>
                Welcome !! I am a Computer Science major enrolled in the College
                of Engineering at Louisiana State University with a primary
                concentration in Software Development.
              </Text>
              <Text>
                As an independent creative-minded artist, my aim is to merge my
                concrete creative abilities alongside acquired technical
                software skills to develop and deliver truly captivating awe
                inspiring software applications.
              </Text>
            </Stack>
            <Heading id="pitch-outro">Let's Build Together !!</Heading>
            <Image id="pitch-logo" src={logo} opacity="20%" />
            <HStack></HStack>
          </Container>
        </Box>
      </Stack>

      {/* Footer */}
      <Container id="home-container" width="100%" zIndex={5}>
        <Footer />
      </Container>
    </Stack>
    // </Container>
  );
};

export default HomePage;
