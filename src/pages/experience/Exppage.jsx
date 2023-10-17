import React from "react";
import "./Exp.css";

import { Stack, Heading } from "@chakra-ui/react";
import Navigation from "../../comp/nav/Navigation";
import Footer from "../../comp/footer/Footer";

const Exppage = () => {
  return (
    <Stack className="Exppage">
      {/* Content Body */}
      <Stack>{/* <Heading>Experience</Heading> */}</Stack>
      <Footer />
    </Stack>
  );
};

export default Exppage;
