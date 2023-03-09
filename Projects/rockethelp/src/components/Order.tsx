import React from "react";
import {
  Box,
  Circle,
  HStack,
  Text,
  useTheme,
  VStack,
  Pressable,
  IPressableProps
} from "native-base";
import {
  ClockAfternoon,
  Hourglass,
  CircleWavyCheck,
} from "phosphor-react-native";

export type OrderProps = {
  id: string;
  patrimony: string;
  when: string;
  status: "open" | "closed";
};

type Props = IPressableProps & {
  data: OrderProps;

};

const Order = ({ data, ...rest }: Props) => {
  const { colors } = useTheme();
  const statusColor =
    data.status == "open" ? colors.secondary[700] : colors.green[300];

  return (
    <Pressable {...rest} >
      <HStack
        background="gray.600"
        marginBottom={4}
        alignItems="center"
        justifyContent="space-between"
        rounded="sm"
        overflow="hidden"
      >
        <Box height="full" width={2} background={statusColor} />
        <VStack flex={1} marginLeft={5} marginY={5}>
          <Text color="white" fontSize="md">
            Patromônio {data.patrimony}
          </Text>
          <HStack alignItems="center">
            <ClockAfternoon size={15} color={colors.gray[300]} />
            <Text color="gray.200" fontSize="xs" marginLeft={1}>
              {data.when}
            </Text>
          </HStack>
        </VStack>
        <Circle background="gray.500" height={12} width={12} marginRight={5}>
          {data.status == "closed" ? (
            <CircleWavyCheck size={24} color={statusColor} />
          ) : (
            <Hourglass size={24} color={statusColor} />
          )}
        </Circle>
      </HStack>
    </Pressable>
  );
};

export default Order;
