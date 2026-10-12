import { createTheme, type MantineColorScheme } from '@mantine/core';

export const theme = createTheme({});

// ColorSchemeScript と MantineProvider は同じ値を受け取らないと、初回表示とハイドレーション後で配色が食い違う
export const defaultColorScheme: MantineColorScheme = 'auto';
