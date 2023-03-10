import Header from "@/components/Header";
import { ContentSection, HeroSection } from "@/styles/pages/home";

import { DiCodeigniter } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { useTheme } from "@/hooks/useTheme";

export default function Home() {
  const { isLight } = useTheme();
  return (
    <>
      <Header />
      <HeroSection>
        <div>
          {isLight ? (
            <DiCodeigniter size={20} color="#1048e0" />
          ) : (
            <DiCodeigniter size={20} />
          )}
          <h1>Criação de sites</h1>
          <span> & landing pages profissionais</span>
        </div>

        <p>Torne seu site melhor</p>
      </HeroSection>

      <ContentSection>
        <div className="card-tech">
          <strong>Tecnologias</strong>
          <span>
            <FaReact />
            React JS
          </span>
          <p>
            Text about react and your libText about react and your libText about
            react and your libText about react and your libText about react and
            your lib
          </p>
        </div>
      </ContentSection>
    </>
  );
}
