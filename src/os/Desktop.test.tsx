import { act, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { LangProvider } from '../i18n/LangProvider';
import { Desktop } from './Desktop';

function open(path: string) {
  window.history.replaceState({}, '', path);
  return render(
    <LangProvider>
      <Desktop />
    </LangProvider>
  );
}

/** Barra de abas do topo (desktop). A sidebar repete os rótulos, então escopa. */
const tabBar = () => within(screen.getByRole('navigation', { name: 'Abas abertas' }));
const tab = (label: string) => tabBar().getByRole('button', { name: label });
const activeTab = () =>
  tabBar()
    .getAllByRole('button')
    .find((b) => b.getAttribute('aria-current') === 'page')?.textContent;

/** O voltar do navegador: muda a URL e dispara popstate, como o jsdom não faz sozinho. */
function goBack(to: string) {
  act(() => {
    window.history.replaceState({}, '', to);
    window.dispatchEvent(new PopStateEvent('popstate'));
  });
}

describe('Desktop: rotas e abas', () => {
  it('abre com sobre e trabalho, sobre em foco', () => {
    open('/');
    expect(tab('sobre')).toBeTruthy();
    expect(tab('trabalho')).toBeTruthy();
    expect(activeTab()).toBe('sobre');
  });

  it('link direto abre o app da URL, carregado sob demanda', async () => {
    const { container } = open('/curriculo');
    expect(activeTab()).toBe('currículo');
    // O chunk lazy é compilado na primeira importação: o 1s padrão do waitFor às vezes não basta.
    await waitFor(() => expect(container.querySelector('[data-resume-header]')).not.toBeNull(), {
      timeout: 5_000,
    });
  });

  it('trocar de aba entra no histórico e o voltar restaura o app anterior', async () => {
    open('/');
    const before = window.history.length;

    await userEvent.click(tab('trabalho'));
    expect(window.location.pathname).toBe('/trabalho');
    expect(window.history.length).toBe(before + 1);

    goBack('/');
    expect(activeTab()).toBe('sobre');
  });

  it('fechar a aba ativa foca a última aberta e corrige a URL sem empilhar', async () => {
    open('/trabalho');
    const before = window.history.length;

    await userEvent.click(tabBar().getByRole('button', { name: 'Fechar aba: trabalho' }));

    expect(tabBar().queryByRole('button', { name: 'trabalho' })).toBeNull();
    expect(activeTab()).toBe('sobre');
    expect(window.location.pathname).toBe('/sobre');
    expect(window.history.length).toBe(before);
  });
});
