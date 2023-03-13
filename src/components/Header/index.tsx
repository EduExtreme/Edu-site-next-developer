import { MdDarkMode, MdOutlineWbSunny } from 'react-icons/md'
import { GoBackButton } from '@/components/GoBackButton'
import { useRouter } from 'next/router'
import { Button, Container, Navigation } from './styles'
import { useTheme } from '@/hooks/useTheme'
import Link from 'next/link'
import { DiCodeigniter } from 'react-icons/di'

export default function Header() {
  const router = useRouter()
  const { onChangeTheme, isLight } = useTheme()
  return (
    <Container>
      <Navigation>
        {router.pathname !== '/' && <GoBackButton />}
        {isLight ? (
          <DiCodeigniter size={50} color="#1048e0" />
        ) : (
          <DiCodeigniter size={30} color="#41F2E1" />
        )}

        <div className="wrapper-nav">
          <Link href="/">Edudevs</Link>
          <Link href="/">Contato</Link>
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
  )
}
