import Image from "next/image";
import { MdDarkMode, MdOutlineWbSunny } from "react-icons/md";
import developerDark from "../../../public/images/developer-transparent-icon.png";
import developerLight from "../../../public/images/developer-icon.png";
import { GoBackButton } from "@/components/GoBackButton";
import { useRouter } from "next/router";
import { Button, Container, Navigation } from "./styles";
import { useTheme } from "@/hooks/useTheme";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const { onChangeTheme, isLight } = useTheme();
  return (
    <Container>
      <Navigation>
        {router.pathname !== "/" && <GoBackButton />}
        <Image
          src={isLight ? developerLight : developerDark}
          width={60}
          height={60}
          alt="logo developer"
        />
        <div className="wrapper-nav">
          <Link href="/">Faça seu site</Link>
        </div>

        <Button type="button" onClick={onChangeTheme}>
          {isLight ? (
            <MdDarkMode size={20} />
          ) : (
            <MdOutlineWbSunny size={20} color="#41F2E1" />
          )}
        </Button>
      </Navigation>
    </Container>
  );
}
