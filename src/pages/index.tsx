import Header from '@/components/Header'
import { ContentSection, HeroSection } from '@/styles/pages/home'
import codeHeroSection from '../../public/images/code-image.png'
import developerMonitor from '../../public/images/developer-monitor.png'

import { FaReact } from 'react-icons/fa'

import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection>
        <div className="text-title">
          <h1>Criação de sites</h1>
          <span> & landing pages profissionais</span>
          <p>This client will realy change your development workflow.</p>
        </div>

        {/* <Image src={codeHeroSection} alt="code site image" width={300} /> */}

        <div className="image-control">
          <Image src={developerMonitor} alt="code context site image" />
        </div>
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
      <HeroSection>
        <div className="text-title">
          <h1>Criação de sites</h1>
          <span> & landing pages profissionais</span>
        </div>

        <Image src={codeHeroSection} alt="code site image" width={300} />

        <div className="image-control">
          <Image
            src={codeHeroSection}
            alt="code context site image"
            width={300}
          />
        </div>
      </HeroSection>
    </>
  )
}
