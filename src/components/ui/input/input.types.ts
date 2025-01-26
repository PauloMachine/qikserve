import type { CSSProperties } from "react";
import * as Io5Icons from "react-icons/io5";

export type TInput = {
  label?: string;
  value?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  placeholder?: string;
  debounceDelay?: number;
  style?: CSSProperties;
  icon?: keyof typeof Io5Icons;
};
