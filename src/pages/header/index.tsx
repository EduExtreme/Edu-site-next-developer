import Image from "next/image";
import { Container, Navigation } from "./styles";
import icon from "../../../public/images/component-image.svg";
import { GoBackButton } from "@/components/GoBackButton";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <Container>
      <Navigation>
        {router.pathname !== "/" && <GoBackButton />}
        <Image src={icon} width={100} height={100} alt="logo da Intlink" />
      </Navigation>
    </Container>
  );
}
