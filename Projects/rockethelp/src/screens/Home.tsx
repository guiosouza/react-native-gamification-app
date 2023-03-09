import React from "react";
import {
  HStack,
  IconButton,
  VStack,
  useTheme,
  Text,
  Heading,
  FlatList,
  Center,
} from "native-base";
import Logo from "../assets/logo_secondary.svg";
import { SignOut } from "phosphor-react-native";
import Filter from "../components/Filter";
import Button from "../components/Button";
import Order from "../components/Order";
import { OrderProps } from "../components/Order";
import { useState } from "react";
import { ChatTeardropText } from "phosphor-react-native";
import { color } from "native-base/lib/typescript/theme/styled-system";

const Home = () => {
  const { colors } = useTheme();
  const [statusSelected, setStatusSelected] = useState<"open" | "closed">(
    "open"
  );
  const [orders, setOrders] = useState<OrderProps[]>([
    // {
    //   id: "123",
    //   patrimony: "123456",
    //   when: "09/03/2023 às 10:21",
    //   status: "open",
    // },
  ]);

  return (
    <VStack flex={1} paddingBottom={6} background="gray.700">
      <HStack
        width="full"
        justifyContent="space-between"
        alignItems="center"
        background="gray.600"
        paddingTop={12}
        paddingBottom={5}
        paddingX={6}
      >
        <Logo />
        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />} />
      </HStack>
      {/* ------------------------------- MEUS CHAMADOS -------------------------------*/}
      <VStack flex={1} paddingX={6}>
        <HStack
          width="full"
          marginTop={8}
          marginBottom={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading color="gray.100">Meus chamados</Heading>
          <Text color="gray.200">3</Text>
        </HStack>
        {/*------------------------------------- FILTROS------------------------------------- */}
        <HStack space={3} marginBottom={8}>
          <Filter
            type="open"
            title="Em andamento "
            onPress={() => setStatusSelected("open")}
            isActive={statusSelected == "open"}
          />
          <Filter
            type="closed"
            title="Finalizados"
            onPress={() => setStatusSelected("closed")}
            isActive={statusSelected == "closed"}
          />
        </HStack>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Order data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
          ListEmptyComponent={() => (
            <Center>
              <ChatTeardropText color={colors.gray[300]} size={40} />
              <Text
                color="gray.300"
                fontSize="xl"
                marginTop="6"
                textAlign="center"
              >
                Você ainda não possui {'\n'}
                solicitações {statusSelected === 'open' ? 'em andamento' : 'finalizadas'}
              </Text>
            </Center>
          )}
        />
        <Button title="Nova solicitação" />
      </VStack>
    </VStack>
  );
};

export default Home;
