import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import portTraits from "../images/portrait.jpg";

const greeting = "Hello, I am Run!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const avatarSrc = portTraits;

const LandingSection = () => {
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
      <VStack>
        <Avatar name="Run" src={avatarSrc}></Avatar>
        <h3>{greeting}</h3>
        <Heading>{bio1}</Heading>
        <Heading>{bio2}</Heading>
      </VStack>

    </FullScreenSection>
  )
};

export default LandingSection;
