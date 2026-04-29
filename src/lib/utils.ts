import { clsx, type ClassValue } from "clsx";
import { type PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ReactFC<T> = React.FC<PropsWithChildren & T>;
