import { useLang } from '../i18n/lang';
import { SECTION_LABELS, UI } from '../content/site';
import { Eyebrow, Reveal } from './ui/primitives';

/**
 * Trecho real de Dobra-SaaS/src/lib/bodyfat.ts. Se o arquivo mudar lá, este
 * bloco mente — por isso ele fica curto e estável, e cita a origem.
 */
const LINES: readonly (readonly [string, string])[] = [
  ['kw', 'export function '],
  ['fn', 'densityToBodyFat'],
  ['pl', '(density: '],
  ['ty', 'number'],
  ['pl', ', formula: '],
  ['ty', 'Formula'],
  ['pl', '): '],
  ['ty', 'number'],
  ['pl', ' {'],
];

const BODY: readonly { indent: number; parts: readonly (readonly [string, string])[] }[] = [
  { indent: 1, parts: [['kw', 'switch'], ['pl', ' (formula) {']] },
  { indent: 2, parts: [['kw', 'case'], ['st', " 'siri'"], ['pl', ': bf = '], ['nu', '495'], ['pl', ' / density - '], ['nu', '450'], ['pl', '; '], ['kw', 'break'], ['pl', ';']] },
  { indent: 2, parts: [['kw', 'case'], ['st', " 'brozek'"], ['pl', ': bf = '], ['nu', '457'], ['pl', ' / density - '], ['nu', '414.2'], ['pl', '; '], ['kw', 'break'], ['pl', ';']] },
  { indent: 2, parts: [['kw', 'case'], ['st', " 'behnke'"], ['pl', ': bf = '], ['nu', '498'], ['pl', ' / density - '], ['nu', '450'], ['pl', '; '], ['kw', 'break'], ['pl', ';']] },
  { indent: 1, parts: [['pl', '}']] },
  { indent: 0, parts: [['pl', '']] },
  { indent: 1, parts: [['cm', '// clamp fisiológico: nenhum humano é 0% nem 70%']] },
  { indent: 1, parts: [['kw', 'return'], ['pl', ' Math.max('], ['nu', '2'], ['pl', ', Math.min('], ['nu', '60'], ['pl', ', bf));']] },
  { indent: 0, parts: [['pl', '}']] },
];

const TONE: Readonly<Record<string, string>> = {
  kw: 'text-iris-300',
  fn: 'text-iris-400',
  ty: 'text-ok',
  st: 'text-warn',
  nu: 'text-warn',
  cm: 'text-ink-500 italic',
  pl: 'text-ink-300',
};

export function Code() {
  const { t } = useLang();

  return (
    <section id="codigo" className="bg-ink-950 hairline-b">
      <div className="section-shell grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Eyebrow>{t(SECTION_LABELS.codigo)}</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.14] sm:text-4xl">
            {t(UI.codeTitle)}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">{t(UI.codeLede)}</p>
          <p className="numeric mt-7 text-xs text-muted">
            <span className="text-accent">src/lib/bodyfat.ts</span> · Dobra SaaS
          </p>
        </div>

        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-hairline bg-ink-900 shadow-2xl">
            <div className="flex items-center gap-2 border-b border-hairline px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
              <span className="numeric ml-2 text-[0.7rem] text-muted">bodyfat.ts</span>
            </div>

            <pre className="numeric overflow-x-auto p-5 text-[0.78rem] leading-6">
              <code>
                <span className="block">
                  {LINES.map(([tone, text], i) => (
                    <span key={i} className={TONE[tone]}>
                      {text}
                    </span>
                  ))}
                </span>
                {BODY.map((line, i) => (
                  <span key={i} className="block">
                    {'  '.repeat(line.indent)}
                    {line.parts.map(([tone, text], j) => (
                      <span key={j} className={TONE[tone]}>
                        {text}
                      </span>
                    ))}
                  </span>
                ))}
              </code>
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
