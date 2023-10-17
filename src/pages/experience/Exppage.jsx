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

const Exppage = () => {
  return (
    <Stack className="Exppage">
      {/* Content Body */}
      <Stack>
        {/* Section 1 */}
        <Flex>
          <Stack>
            <Heading>Experience</Heading>
            <Text>Hands on Real World Issues...</Text>
          </Stack>
        </Flex>
        {/* Section 2 */}

        {/* Section 3 */}
      </Stack>
      <Footer />
    </Stack>
  );
};

export default Exppage;
