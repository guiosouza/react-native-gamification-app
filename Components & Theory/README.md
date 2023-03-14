# Lista de componentes para uso

[1# - FlatList](#flatlist)

## FlatList

O componente abaixo (ListScreen) é um componente de lista no React Native que utiliza o componente FlatList. Ele renderiza uma lista de amigos (ou qualquer outro item que você queira exibir) que é passada para ele através do objeto friends.

Ao definir a propriedade keyExtractor da FlatList, estamos informando ao componente como extrair a chave única de cada item na lista (neste caso, estamos usando o nome do amigo). Isso ajuda a otimizar a renderização, uma vez que o React sabe qual item foi adicionado, modificado ou removido, minimizando o número de re-renderizações necessárias.

A propriedade data contém a lista de amigos que será exibida, e a propriedade renderItem define como cada item da lista será renderizado. Neste caso, estamos usando uma função de retorno de chamada (renderItem={({ item }) => {...}}) para renderizar cada item como um componente Text que exibe o nome do amigo.

Este componente é uma ótima maneira de exibir uma lista de itens em seu aplicativo React Native de forma eficiente e com aparência profissional. Você pode personalizar ainda mais este componente adicionando estilos ao objeto styles utilizando a API StyleSheet do React Native.

```JSX
import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1" },
    { name: "Friend #3" },
    { name: "Friend #4" },
    { name: "Friend #2" },
    { name: "Friend #5" },
    { name: "Friend #6" },
    { name: "Friend #7" },
    { name: "Friend #8" },
    { name: "Friend #9" },
    { name: "Friend #10" },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        // DESCRIPTION OF RENDERITEM PROP:
        // element === {item: {name: "Friend #1"}, index: 0}

        return <Text>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
```
