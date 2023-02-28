import React from "react";
import { Button as ButtonNativeBase, IButtonProps, Heading } from "native-base";

// recebe as propos do IButtonProps e o title
type Props = IButtonProps & {
  title: string;
};
// ...rest são todas props do IButtonProps para poder declarar
const Button = ({ title, ...rest }: Props) => {
  return (
    <ButtonNativeBase 
        {...rest}
        bg="green.700"
        h={14}
        fontSize="sm"
        rounded="sm"
        _pressed={{
            bg: "green.500"
        }}
        >
      <Heading color="white" fontSize="sm">{title}</Heading>
    </ButtonNativeBase>
  );
};

export default Button;
