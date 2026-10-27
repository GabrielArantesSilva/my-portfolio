import { Download } from 'lucide-react';
import { useLang } from '../i18n/lang';
import { RESUME_PDF, UI } from '../content/site';
import type { Txt } from '../content/types';

interface ResumeDownloadProps {
  /** `icon` só mostra o ícone (barra lateral recolhida). */
  variant?: 'primary' | 'icon';
  label?: Txt;
  className?: string;
  onClick?: () => void;
}

/** Download direto do PDF no idioma atual — funciona igual no celular. */
export function ResumeDownload({
  variant = 'primary',
  label = UI.downloadResume,
  className = '',
  onClick,
}: ResumeDownloadProps) {
  const { t } = useLang();
  const href = t(RESUME_PDF);
  const text = t(label);

  return (
    <a
      href={href}
      download={href.slice(1)}
      onClick={onClick}
      title={variant === 'icon' ? text : undefined}
      aria-label={variant === 'icon' ? text : undefined}
      className={`inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg bg-accent font-mono text-xs font-semibold text-on-accent shadow-sm transition-transform hover:-translate-y-0.5 active:scale-95 print:hidden ${
        variant === 'icon' ? 'h-8 w-8' : 'px-3 py-2'
      } ${className}`}
    >
      <Download className="h-3.5 w-3.5" />
      {variant !== 'icon' && <span>{text}</span>}
    </a>
  );
}
