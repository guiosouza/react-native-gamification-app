import {useState} from 'react'
import { VStack, Heading, Icon, useTheme } from "native-base";
import Input from "../components/Input";
import Button from "../components/Button";
import Logo from "../assets/logo_primary.svg";
import { Envelope, Key } from "phosphor-react-native";

const SignIn = () => {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { colors } = useTheme();
  function handleSignIn() {
    console.log(name, password);
  }

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} paddingTop={24}>
      <Logo />
      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>
      <Input
        marginBottom={4}
        placeholder="E-mail"
        InputLeftElement={
          <Icon as={<Envelope color={colors.gray[300]} />} marginLeft={4} />
        }
        onChangeText={setName}
      />
      <Input
        marginBottom={8}
        placeholder="Senha"
        InputLeftElement={
          <Icon as={<Key color={colors.gray[300]} />} marginLeft={4} />
        }
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Entrar" width="full" onPress={handleSignIn} />
    </VStack>
  );
};

export default SignIn;
