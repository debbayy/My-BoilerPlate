import { Button } from "@mantine/core";
import { IGlobalButton } from "./GlobalButton.types";

const GlobalButton = (ButtonData: IGlobalButton) => {
  return <Button>{ButtonData.label}</Button>;
};

export default GlobalButton;
