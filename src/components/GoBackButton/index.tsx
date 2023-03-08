import { IoArrowBackOutline } from "react-icons/io5";
import { Container } from "./styles";

export function GoBackButton() {
  return (
    <Container href="/">
      <IoArrowBackOutline size={20} />
      Voltar
    </Container>
  );
}
