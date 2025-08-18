import { Header } from '@/components/header/Header'
import { Main } from '@/components/main/Main'
import { About } from '@/components/about/About'
import { Projects } from '@/components/projects/Projects'
import Team  from '@/components/team/Team'
import Contact  from '@/components/contact/Contact'
import Footer from '@/components/footer/Footer'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <Main />
        <About />
        <Projects />
        <Team />
        <Contact />
        <Footer />
      </body>
    </html>
  )
}