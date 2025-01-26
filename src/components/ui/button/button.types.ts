import type { ReactNode } from "react";
import type { CSSProperties } from "styled-components";

export type TButton = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  style?: CSSProperties;
};
