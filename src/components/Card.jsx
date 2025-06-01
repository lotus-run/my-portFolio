import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack alignItems={"flex-start"} spacing={4} p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
      <Image rounded="md" src={imageSrc}></Image>
      <Heading>{title}</Heading>
      <Text fontWeight="light">{description}</Text>
      <HStack>
        <Text>See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
