import { useMemo, useState } from 'react';
import { useLang } from '../i18n/lang';
import { CONTACT_CHANNELS, IDENTITY, REQUEST_KINDS, UI } from '../content/site';

/**
 * Formulário sem back-end: compõe a mensagem e entrega em dois canais que já
 * existem — WhatsApp e e-mail. Sem serviço de terceiro, sem chave, sem
 * formulário que some no vazio quando o plano gratuito acaba.
 */
const primaryCls = (ready: boolean) =>
  ready ? 'bg-ok text-ink-950 hover:-translate-y-0.5' : 'cursor-not-allowed bg-ink-850 text-ink-600';

const secondaryCls = (ready: boolean) =>
  ready
    ? 'border-hairline text-body hover:border-accent hover:text-heading'
    : 'cursor-not-allowed border-hairline/50 text-ink-600';

const chipCls = (on: boolean) =>
  on
    ? 'border-accent bg-accent/12 text-heading'
    : 'border-hairline text-muted hover:border-accent/50 hover:text-body';

export function Requests() {
  const { t } = useLang();
  const [kind, setKind] = useState<string>(REQUEST_KINDS[0].id);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const chosen = REQUEST_KINDS.find((k) => k.id === kind) ?? REQUEST_KINDS[0];
  const ready = message.trim().length > 8;

  const composed = useMemo(() => {
    const who = name.trim() ? `${name.trim()}` : '';
    return [`[${t(chosen.label)}]`, who && `— ${who}`, '\n\n', message.trim()]
      .filter(Boolean)
      .join(' ');
  }, [chosen, name, message, t]);

  const whatsapp = CONTACT_CHANNELS.whatsapp
    ? `https://wa.me/${CONTACT_CHANNELS.whatsapp}?text=${encodeURIComponent(composed)}`
    : null;

  const mail = `mailto:${IDENTITY.email}?subject=${encodeURIComponent(
    `${t(chosen.label)}${name.trim() ? ` — ${name.trim()}` : ''}`
  )}&body=${encodeURIComponent(message.trim())}`;

  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-lg font-semibold text-heading">{t(UI.requestsTitle)}</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted">{t(UI.requestsLede)}</p>
      </header>

      <fieldset>
        <legend className="numeric text-[0.65rem] uppercase tracking-[0.18em] text-accent">
          {t(UI.requestKind)}
        </legend>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {REQUEST_KINDS.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setKind(option.id)}
              aria-pressed={kind === option.id}
              className={`numeric rounded-lg border px-2.5 py-1 text-xs transition-colors ${chipCls(kind === option.id)}`}
            >
              {t(option.label)}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="block">
        <span className="numeric text-[0.65rem] uppercase tracking-[0.18em] text-accent">
          {t(UI.yourName)}
        </span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-hairline bg-canvas px-3 py-2 text-sm text-body outline-none transition-colors focus:border-accent"
        />
      </label>

      <label className="block">
        <span className="numeric text-[0.65rem] uppercase tracking-[0.18em] text-accent">
          {t(chosen.prompt)}
        </span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="mt-1.5 w-full resize-y rounded-lg border border-hairline bg-canvas px-3 py-2 text-sm leading-relaxed text-body outline-none transition-colors focus:border-accent"
        />
      </label>

      <div className="flex flex-wrap gap-2">
        {whatsapp && (
          <a
            href={ready ? whatsapp : undefined}
            target="_blank"
            rel="noreferrer noopener"
            aria-disabled={!ready}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all ${primaryCls(ready)}`}
          >
            {t(UI.sendWhatsapp)}
          </a>
        )}

        <a
          href={ready ? mail : undefined}
          aria-disabled={!ready}
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all ${secondaryCls(ready)}`}
        >
          {t(UI.sendEmail)}
        </a>
      </div>

      <p className="numeric text-[0.62rem] text-ink-600">{t(UI.requestsFooter)}</p>
    </div>
  );
}
