import React from "react";

export const Button = (props: React.PropsWithChildren) => {
  return (
    <button className="border py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
      <span>{props.children}</span>
    </button>
  );
};
