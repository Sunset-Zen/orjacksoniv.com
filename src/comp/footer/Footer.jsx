import React from "react";
import "./foot.css";
import {
  Stack,
  HStack,
  Box,
  Link,
  List,
  ListItem,
  ListIcon,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";

import logo from "../../assets/img/O-Logo(Edition Pearl) copy.0bdcfc8ee8147103e7b5.png";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Flex className="Footer">
      {/* External Links */}
      <HStack>
        <Box id="foot-img">
          <Image src={logo} />
        </Box>
        <Stack gap={0}>
          <Text>
            <b>Otis Jackson IV</b>
          </Text>
          <List opacity="60%">
            <ListItem>
              <Flex>
                <Link
                  href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=spiritedhokage@gmail.com"
                  isExternal
                >
                  <ListIcon className="ext-icons" as={IoMdMail} />
                </Link>
                <Text className="ext-links">spiritedhokage@gmail.com</Text>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex>
                <Link href="https://github.com/Sunset-Zen" isExternal>
                  <ListIcon className="ext-icons" as={AiFillGithub} />
                </Link>
                <Text className="ext-links">https://github.com/Sunset-Zen</Text>
              </Flex>
            </ListItem>

            <ListItem>
              <Flex>
                <Link
                  href="https://www.linkedin.com/in/otis-jackson4/"
                  isExternal
                >
                  <ListIcon className="ext-icons" as={AiFillLinkedin} />
                </Link>
                <Text className="ext-links">
                  https://www.linkedin.com/in/otis-jackson4/
                </Text>
              </Flex>
            </ListItem>
          </List>
        </Stack>
      </HStack>

      {/* Site Links */}
      <HStack id="site-links">
        <Box alignSelf="self-start">
          <Link href="/">
            <Text id="foot-transition">
              <i>Home</i>
            </Text>
          </Link>
        </Box>

        <Stack alignSelf="self-start">
          <Link href="/about-me">
            <Text>
              <i>About Me</i>
            </Text>
          </Link>
          <List>
            <ListItem>
              <Link href="/about-me/#skill-section">
                <Text className="sub-link">
                  <i>Skillset</i>
                </Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/about-me/#education-section">
                <Text className="sub-link">
                  <i>Education</i>
                </Text>
              </Link>
            </ListItem>
          </List>
        </Stack>
        <Stack alignSelf="self-start">
          <Link href="/projects">
            <Text>
              <i>Projects</i>
            </Text>
          </Link>
          <List>
            <ListItem>
              <Link href="/projects/#active-section">
                <Text className="sub-link">
                  <i>Active</i>
                </Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/projects/#dev-section">
                <Text className="sub-link">
                  <i>Developed</i>
                </Text>
              </Link>
            </ListItem>
          </List>
        </Stack>
        <Stack alignSelf="self-start">
          <Link href="/exp">
            <Text>
              <i>Experience</i>
            </Text>
          </Link>
          <List>
            <ListItem>
              <Link href="/exp/#internships">
                <Text className="sub-link">
                  <i>Internships</i>
                </Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/exp/#oc-jobs">
                <Text className="sub-link">
                  <i>On-Campus</i>
                </Text>
              </Link>
            </ListItem>
          </List>
        </Stack>
      </HStack>
    </Flex>
  );
};

export default Footer;
