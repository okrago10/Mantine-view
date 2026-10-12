import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/spotlight/styles.css';

import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import { defaultColorScheme } from '@/theme';
import { Providers } from './providers';

export const metadata = {
  title: 'Mantine View',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme={defaultColorScheme} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
