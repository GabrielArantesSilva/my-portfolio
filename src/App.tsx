import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { LangProvider } from './i18n/LangProvider';
import { Boot } from './os/Boot';
import { Desktop } from './os/Desktop';

const BOOT_KEY = 'ga.booted';

function Shell() {
  // Boot só na primeira visita da sessão: quem volta não repete a animação.
  const [booted, setBooted] = useState(
    () => typeof window !== 'undefined' && window.sessionStorage.getItem(BOOT_KEY) === '1'
  );

  const finish = () => {
    window.sessionStorage.setItem(BOOT_KEY, '1');
    setBooted(true);
  };

  return (
    <>
      <AnimatePresence>{!booted && <Boot key="boot" onDone={finish} />}</AnimatePresence>
      <Desktop />
    </>
  );
}

export default function App() {
  return (
    <LangProvider>
      <Shell />
    </LangProvider>
  );
}
