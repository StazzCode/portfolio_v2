import './index.css'
import { Layout } from './components/Layout'
import { Hero } from './components/Hero'
import { Stack } from './components/Stack'
import { Journey } from './components/Journey'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

export function App() {
  return (
    <Layout>
      <Hero />
      <Stack />
      <Journey />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default App
