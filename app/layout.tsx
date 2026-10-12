import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import './mantine-styles';
import { Providers } from './providers';

export const metadata = {
  title: 'Mantine View',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
