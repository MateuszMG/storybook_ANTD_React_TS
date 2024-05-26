import { Button as AntdButton } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { ReactNode } from "react";

interface ButtonProps {
  size?: SizeType;
  children: ReactNode;
  onClick?: () => void;
}

export const Button = ({
  children,
  size = "middle",
  ...props
}: ButtonProps) => {
  return (
    <AntdButton size={size} {...props}>
      {children}
    </AntdButton>
  );
};
