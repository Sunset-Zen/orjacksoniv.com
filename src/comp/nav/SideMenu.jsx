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
import { HiHome } from "react-icons/hi";
import { PiUserCircleFill } from "react-icons/pi";
import { SiBuildkite } from "react-icons/si";
import { MdWorkspacesFilled } from "react-icons/md";

function SideMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box id="toggle-box" display="flex">
      <IconButton
        variant="unstyled"
        onClick={onOpen}
        icon={<ToggleIcon />}
        color="white"
        zIndex="3"
        id="toggle"
      />
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          id="side-bg"
          background="linear-gradient(to top, black, #1d1720)"
          paddingTop="7%"
          // borderLeft="2px solid #D95810"
        >
          <DrawerHeader>
            <Heading id="side-menu-header" as="h2" size="xl" color="white">
              <i>Otis Jackson IV</i>
            </Heading>
          </DrawerHeader>

          <DrawerBody color="white" overflow="hidden">
            <List spacing={5} marginTop="30px" borderLeft="1px solid whhite">
              <ListItem>
                {/* <ListIcon as={HiHome} /> */}
                <Link href="/" width="100%" className="side-menu-link">
                  <i>
                    <b>Home</b>
                  </i>
                </Link>
              </ListItem>
              <ListItem>
                {/* <ListIcon as={PiUserCircleFill} /> */}
                <Link href="/about-me" className="side-menu-link">
                  <i>
                    <b>About Me</b>
                  </i>
                </Link>
              </ListItem>
              <ListItem>
                {/* <ListIcon as={SiBuildkite} /> */}
                <Link href="/projects" className="side-menu-link">
                  <i>
                    <b>Projects</b>
                  </i>
                </Link>
              </ListItem>
              <ListItem>
                {/* <ListIcon as={MdWorkspacesFilled} /> */}
                <Link href="/exp" className="side-menu-link">
                  <i>
                    <b>Experience</b>
                  </i>
                </Link>
              </ListItem>
            </List>

            {/* Side Menu Logo */}
            <HStack
              pos="relative"
              display="flex"
              justifyContent="center"
              marginTop="50%"
              padding={2}
            >
              {/* <Box
                w={4}
                h={4}
                background="#D5785B"
                borderRadius="100%"
                pos="relative"
                left={2}
              ></Box> */}
              <Box
                w={40}
                h={40}
                objectFit="cover"
                opacity="10%"
                transform="scale(2.5)"
              >
                <Image src={logo} />
              </Box>
              {/*   filter: drop-shadow(0 0 2em #e9462e); */}
              {/* <Box
                w={4}
                h={4}
                background="#D5785B"
                borderRadius="100%"
                pos="relative"
                right={2}
              ></Box> */}
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default SideMenu;
