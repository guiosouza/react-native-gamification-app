import React from "react";
import { Button as ButtonNativeBase, IButtonProps, Heading } from "native-base";

type Props = IButtonProps & {
  title: string;
};

const Button = ({ title, ...rest }: Props) => {
  return (
    <ButtonNativeBase
      background="green.700"
      height={14}
      fontSize="sm"
      rounded="sm"
      _pressed={{ background: "green.500" }}
      {...rest}
    >
      <Heading color="white" fontSize="sm">{title}</Heading>
    </ButtonNativeBase>
  );
};

export default Button;
