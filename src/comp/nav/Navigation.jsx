import React from "react";
import { Box, Image, HStack, IconButton, Icon } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

import "./navi.css";
import img1 from "../../assets/img/O-Logo(Edition Pearl)-mobile.png";
import SideMenu from "./SideMenu";
import ToggleIcon from "./icons/ToggleIcon";
import { HamburgerIcon } from "@chakra-ui/icons";

import { useState } from "react";

const Navigation = () => {
  // Attributes
  // Hooks
  const [mobile, setMobile] = useState();
  // JSX
  return (
    <HStack className="nav" pos="absolute">
      <Box>
        <Image src={img1} />
      </Box>

      {/* Mobile Nav */}
      <SideMenu />
    </HStack>
  );
};

export default Navigation;
