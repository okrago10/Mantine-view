'use client';

import { CodeHighlightAdapterProvider, createShikiAdapter } from '@mantine/code-highlight';
import { MantineProvider } from '@mantine/core';
import { defaultColorScheme, theme } from '@/theme';

// Shiki requires async code to load the highlighter
async function loadShiki() {
  const { createHighlighter } = await import('shiki');
  const shiki = await createHighlighter({
    langs: ['tsx', 'scss', 'html', 'bash', 'json'],
    themes: [],
  });

  return shiki;
}

const shikiAdapter = createShikiAdapter(loadShiki);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={theme} defaultColorScheme={defaultColorScheme}>
      <CodeHighlightAdapterProvider adapter={shikiAdapter}>{children}</CodeHighlightAdapterProvider>
    </MantineProvider>
  );
}
