import React, { FC } from "react";
import "./App.css";

type props = {
  name: string;
  description: string;
};
const Editor: FC<props> = ({ name, description }) => {
  return (
    <>
      <div
        className="sec-widget"
        data-widget="58da4c9cd8e023cfeb6e4abd4edd2c08"
        data-theme="dark"
        data-id="58da4c9cd8e023cfeb6e4abd4edd2c08"
        // data-custom-data="user_id={32432}"
      ></div>
      <p>{name}</p>
      <p>{description}</p>
    </>
  );
};

export default Editor;
