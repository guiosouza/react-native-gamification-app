import React from "react";
import { useState } from "react";
import {
  HStack,
  IconButton,
  VStack,
  useTheme,
  Text,
  Heading,
} from "native-base";
import { SignOut } from "phosphor-react-native";
import Logo from "../assets/logo_secondary.svg";
import Filter from "../components/Filter";

const Home = () => {
  const [statusSelected, setStatusSelected] = useState<"open" | "closed">(
    "open"
  );
  const { colors } = useTheme();

  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        background="gray.600"
        pt={12}
        pb={5}
        px={6}
      >
        <Logo />
        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />} />
      </HStack>

      <VStack flex={1} px={6}>
        <HStack
          w="full"
          mt={8}
          mb={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading color="gray.100">Meus chamados</Heading>
          <Text color="gray.200">3</Text>
        </HStack>
        <HStack space={3} mb={8}>
          <Filter
            type="open"
            title="Em andamento"
            onPress={() => {
              setStatusSelected("open");
            }}
          />
          <Filter
            type="closed"
            title="Finalizados"
            onPress={() => {
              setStatusSelected("open");
            }}
          />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Home;
