import useAI from "./hooks/useAI.ts";
import type { JSX } from "react";

interface IBootstrap {
  children: JSX.Element;
}
/**
 * Bootstraps application with dependencies and behavior
 *
 * @param children application entrypoint file e.g., App.tsx
 **/
const Bootstrap = ({ children }: IBootstrap) => {
  useAI();

  return <>{children}</>;
};

export default Bootstrap;
