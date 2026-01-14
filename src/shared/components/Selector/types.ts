import type { Component } from "vue";

export type TOption<T> = {
  label: string;
  value: T | null;
};

export type TDefaultOptionComponentProps<T> = {
  option: TOption<T>;
  selected?: boolean;
  size?: "small" | "big";
};

export type TSelectorProps<T> = {
  options: TOption<T>[];
  value: T | null;
  size?: "small" | "big";
  placeholder?: string;
  hasClearButton?: boolean;
  clearButtonSize?: "small" | "big" | "auto";
  clearButtonVariant?: "plain" | "bordered";
  customItem?: Component<TDefaultOptionComponentProps<T>>;
};
