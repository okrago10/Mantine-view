import { createTheme, type MantineColorScheme } from '@mantine/core';
import breakpoints from './breakpoints.json';

export const theme = createTheme({ breakpoints });

// ColorSchemeScript と MantineProvider は同じ値を受け取らないと、初回表示とハイドレーション後で配色が食い違う
export const defaultColorScheme: MantineColorScheme = 'auto';
