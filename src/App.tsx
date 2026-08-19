import { LangProvider } from './i18n/LangProvider';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Now } from './components/Now';
import { Projects } from './components/Projects';
import { Code } from './components/Code';
import { Brain } from './components/Brain';
import { Method } from './components/Method';
import { Writing } from './components/Writing';
import { Contact } from './components/Contact';

function App() {
  return (
    <LangProvider>
      <Nav />
      <main id="conteudo">
        <Hero />
        <Now />
        <Projects />
        <Code />
        <Brain />
        <Method />
        <Writing />
        <Contact />
      </main>
    </LangProvider>
  );
}

export default App;
