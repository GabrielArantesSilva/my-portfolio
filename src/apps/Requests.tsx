import { useMemo, useRef, useState } from 'react';
import { Send, MessageSquare } from 'lucide-react';
import { useLang } from '../i18n/lang';
import { CONTACT_CHANNELS, IDENTITY, REQUEST_KINDS, UI } from '../content/site';

// Os botões ficam sempre clicáveis: desabilitar sem aviso parecia quebrado.
const primaryCls = (ready: boolean) =>
  ready
    ? 'bg-ok text-ink-950 hover:-translate-y-0.5 shadow-sm'
    : 'bg-ok/40 text-ink-950/70';

const secondaryCls = (ready: boolean) =>
  ready
    ? 'border-hairline text-body hover:border-accent hover:text-heading'
    : 'border-hairline/60 text-muted';

const chipCls = (on: boolean) =>
  on
    ? 'border-accent bg-accent/15 text-heading font-medium'
    : 'border-hairline bg-ink-900/40 text-muted hover:border-accent/50 hover:text-body';

export function Requests() {
  const { t } = useLang();
  const [kind, setKind] = useState<string>(REQUEST_KINDS[0].id);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [warn, setWarn] = useState(false);
  const [mailTried, setMailTried] = useState(false);
  const [copied, setCopied] = useState(false);
  const field = useRef<HTMLTextAreaElement>(null);

  const chosen = REQUEST_KINDS.find((k) => k.id === kind) ?? REQUEST_KINDS[0];
  const ready = message.trim().length > 0;

  const composed = useMemo(() => {
    const who = name.trim();
    const greeting = who ? `${t(UI.requestHello)} ${t(UI.requestIAm)} ${who}.` : t(UI.requestHello);
    return `${greeting}\n\n*${t(chosen.label)}*\n${message.trim()}`;
  }, [chosen, name, message, t]);

  /** Sem mensagem, avisa e leva o foco ao campo em vez de não fazer nada. */
  const guard = (e: React.MouseEvent) => {
    if (ready) return true;
    e.preventDefault();
    setWarn(true);
    field.current?.focus();
    return false;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(IDENTITY.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const whatsapp = CONTACT_CHANNELS.whatsapp
    ? `https://wa.me/${CONTACT_CHANNELS.whatsapp}?text=${encodeURIComponent(composed)}`
    : null;

  const mail = `mailto:${IDENTITY.email}?subject=${encodeURIComponent(
    `${t(chosen.label)}${name.trim() ? ` - ${name.trim()}` : ''}`
  )}&body=${encodeURIComponent(composed.replace(/\*/g, ''))}`;

  return (
    <div className="space-y-3.5">
      <header className="border-b border-hairline/60 pb-2.5">
        <h1 className="text-sm font-semibold text-heading">{t(UI.requestsTitle)}</h1>
        <p className="mt-0.5 text-xs text-muted">{t(UI.requestsLede)}</p>
      </header>

      <fieldset>
        <legend className="font-mono text-[0.62rem] uppercase tracking-wider text-accent font-medium">
          {t(UI.requestKind)}
        </legend>
        <div className="mt-1.5 flex flex-wrap gap-1">
          {REQUEST_KINDS.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setKind(option.id)}
              aria-pressed={kind === option.id}
              className={`font-mono rounded-lg border px-2 py-0.5 text-[0.68rem] transition-colors ${chipCls(
                kind === option.id
              )}`}
            >
              {t(option.label)}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="font-mono text-[0.62rem] uppercase tracking-wider text-accent font-medium">
            {t(UI.yourName)}
          </span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full rounded-lg border border-hairline bg-canvas px-3 py-1.5 text-xs text-body outline-none transition-colors focus:border-accent"
          />
        </label>

        <label className="block sm:col-span-2">
          <span className="font-mono text-[0.62rem] uppercase tracking-wider text-accent font-medium">
            {t(chosen.prompt)}
          </span>
          <textarea
            ref={field}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              if (e.target.value.trim()) setWarn(false);
            }}
            aria-invalid={warn}
            rows={3}
            className={`mt-1 w-full resize-y rounded-lg border ${warn ? 'border-danger' : 'border-hairline'} bg-canvas px-3 py-1.5 text-xs leading-relaxed text-body outline-none transition-colors focus:border-accent`}
          />
          {warn && (
            <span role="alert" className="mt-1 block font-mono text-[0.68rem] text-danger">
              {t(UI.requestEmpty)}
            </span>
          )}
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-2 pt-1">
        {whatsapp && (
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer noopener"
            onClick={guard}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs font-semibold transition-all ${primaryCls(
              ready
            )}`}
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>{t(UI.sendWhatsapp)}</span>
          </a>
        )}

        <a
          href={mail}
          onClick={(e) => {
            if (guard(e)) setMailTried(true);
          }}
          className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-mono text-xs transition-all ${secondaryCls(
            ready
          )}`}
        >
          <Send className="h-3.5 w-3.5" />
          <span>{t(UI.sendEmail)}</span>
        </a>
      </div>

      {mailTried && (
        <p className="flex flex-wrap items-center gap-1.5 font-mono text-[0.68rem] text-muted">
          <span>{t(UI.emailFallback)}</span>
          <span className="text-heading">{IDENTITY.email}</span>
          <button
            type="button"
            onClick={copyEmail}
            className="rounded border border-hairline px-1.5 py-0.5 text-[0.62rem] hover:border-accent hover:text-heading"
          >
            {t(copied ? UI.copied : UI.copy)}
          </button>
        </p>
      )}

      <p className="font-mono text-[0.6rem] text-ink-500">{t(UI.requestsFooter)}</p>
    </div>
  );
}
