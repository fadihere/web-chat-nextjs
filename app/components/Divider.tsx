import React from "react";

type DividerProps = {
  // Props definition here
  classProps?: string;
};
export default function Divider({ classProps }: DividerProps) {
  return <div className={`w-full border-t ${classProps}`} />;
}
