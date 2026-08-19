import { LangProvider } from './i18n/lang';

function App() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-canvas text-body">
        <main id="conteudo" />
      </div>
    </LangProvider>
  );
}

export default App;
