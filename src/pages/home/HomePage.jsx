import React from "react";
import Button from "../../components/button/Button.jsx";

const HomePage = () => {
  return (
      <>
          <Button title="Button" iconLeft="pencil" iconRight="plus" />
          <Button title="Button" iconLeft="pencil" />
          <Button title="Button" iconRight="plus" />
          <Button title="Button (no icons)" />
      </>
  )
};

export default HomePage;
