import React from "react";
import { Heading, Text, Flex, Link, List } from "@chakra-ui/react";
import {
  BiLogoJava,
  BiLogoJavascript,
  BiLogoPython,
  BiLogoFigma,
  BiLogoGithub,
  BiLogoNodejs,
  BiLogoChrome,
} from "react-icons/bi";
import { SiCsharp } from "react-icons/si";
import { FaReact } from "react-icons/fa";

function ProjTitle(props) {
  return (
    <Flex className="proj-">
      <List>
        {/* Text / Team */}
        <Flex gap={3}>
          <Heading bgGradient="linear(to-l, #e9462e, #aa205f)" bgClip="text">
            <b>
              <i>{props.title}</i>
            </b>
          </Heading>
          <Heading fontFamily="Inria Sans">
            / <i>{props.type}</i>
          </Heading>
        </Flex>
        {props.type === "Group" && (
          <Text fontFamily="Inria Sans">
            <i>
              {props.pos} : {props.lead}
            </i>
          </Text>
        )}
        <Text fontFamily="Inria Sans">
          <i>{props.role} : Otis Jackson IV (Me)</i>
        </Text>
        <Text fontFamily="Inria Sans">
          <i>Language(s) : {props.lang}</i>
        </Text>
      </List>
      <List>
        <Flex>
          {/* link icons */}
          <Link href={props.link1}></Link>
          <Link href={props.link2}></Link>
        </Flex>
      </List>
    </Flex>
  );
}

export default ProjTitle;
