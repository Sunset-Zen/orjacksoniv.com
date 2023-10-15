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

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import logo from "../../assets/img/O-Logo(Edition Pearl) copy.0bdcfc8ee8147103e7b5.png";
import { useDisclosure } from "@chakra-ui/react";
import ToggleIcon from "./icons/ToggleIcon";
import "./navi.css";
// import { log } from "console";

function SideMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box width="100%" height="10%" pos="relative">
      <IconButton
        variant="unstyled"
        onClick={onOpen}
        icon={<ToggleIcon />}
        color="white"
        zIndex="3"
        pos="relative"
        left="80%"
        id="toggle"
      />
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          id="side-bg"
          background="linear-gradient(to top, black, #1d1720)"
          paddingTop="7%"
          borderLeft="1px solid #E9462E"
        >
          <DrawerHeader borderBottomWidth="1px" borderBottomColor="white">
            <Heading color="white">
              <i>Otis Jackson IV</i>
            </Heading>
          </DrawerHeader>
          <DrawerBody color="white">
            <List spacing={3}>
              <ListItem>
                <ListIcon />
                <Link href="/">Home</Link>
              </ListItem>
              <ListItem>
                <ListIcon />
                <Link href="/about-me">About Me</Link>
              </ListItem>
              <ListItem>
                <ListIcon />
                <Link href="/projects">Projects</Link>
              </ListItem>
              <ListItem>
                <ListIcon />
                <Link href="/exp">Experience</Link>
              </ListItem>
            </List>

            {/* Side Menu Logo */}
            <HStack
              pos="relative"
              display="flex"
              justifyContent="center"
              marginTop="70%"
              padding={2}
            >
              <Box
                w={4}
                h={4}
                background="white"
                borderRadius="100%"
                pos="relative"
                left={2}
              ></Box>
              <Box w={40} h={40} objectFit="cover">
                <Image src={logo} />
              </Box>
              <Box
                w={4}
                h={4}
                background="white"
                borderRadius="100%"
                pos="relative"
                right={2}
              ></Box>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default SideMenu;
