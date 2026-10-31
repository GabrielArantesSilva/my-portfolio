import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { LangProvider } from '../i18n/LangProvider';
import { Stack } from './Stack';

const renderStack = () =>
  render(
    <LangProvider>
      <Stack />
    </LangProvider>
  );

const group = (label: string) =>
  within(screen.getByRole('heading', { name: label }).closest('section')!);

describe('Stack', () => {
  it('mostra as linguagens do dia a dia, mesmo sem nota no vault', () => {
    renderStack();
    for (const name of ['TypeScript', 'JavaScript', 'SQL']) {
      expect(group('Linguagens').getByRole('button', { name })).toBeTruthy();
    }
  });

  it('Vite e Docker ficam juntos em build e infra', () => {
    renderStack();
    for (const name of ['Vite', 'Vitest', 'Docker']) {
      expect(group('Build, testes & infra').getByRole('button', { name })).toBeTruthy();
    }
  });

  it('não duplica o que está na lista curada e no vault', () => {
    renderStack();
    expect(screen.getAllByRole('button', { name: 'Next.js' })).toHaveLength(1);
    expect(screen.getAllByRole('button', { name: 'React' })).toHaveLength(1);
    expect(screen.getAllByRole('button', { name: 'PostgreSQL' })).toHaveLength(1);
    expect(screen.getAllByRole('button', { name: 'Docker' })).toHaveLength(1);
  });

  it('mantém as ferramentas que só existem no vault', () => {
    renderStack();
    expect(group('Frameworks & Runtime').getByRole('button', { name: 'NestJS' })).toBeTruthy();
  });

  it('detalhe diz em quais projetos a ferramenta foi usada', async () => {
    renderStack();
    await userEvent.click(screen.getByRole('button', { name: 'Expo' }));
    const detail = screen.getByRole('article');
    expect(within(detail).getByText(/COLAÍ/)).toBeTruthy();
    expect(within(detail).getByText(/ainda sem nota/)).toBeTruthy();
  });
});
