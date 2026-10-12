# Mantine-view

[Mantine](https://mantine.dev/) を導入した Next.js（App Router）プロジェクトです。構成は [ui.mantine.dev](https://github.com/mantinedev/ui.mantine.dev) を参考にしています。

## 必要な環境

- Node.js 24（`.nvmrc` 参照）
- npm

## セットアップ

```bash
npm install
npm run dev
```

http://localhost:3000 を開くと、導入確認用のページが表示されます。

## スクリプト

| コマンド | 内容 |
| --- | --- |
| `npm run dev` | 開発サーバーを起動する |
| `npm run build` | 本番用にビルドする |
| `npm run start` | ビルド結果を起動する |
| `npm run typecheck` | 型検査を行う |
| `npm run lint` | oxlint で静的解析を行う |
| `npm run format:test` | oxfmt で整形の崩れを検査する |
| `npm run format:write` | oxfmt で整形する |
| `npm test` | format・lint・typecheck をまとめて実行する |

## 導入済みのパッケージ

- `@mantine/core` / `@mantine/hooks` / `@mantine/form`
- `@mantine/carousel` / `@mantine/code-highlight` / `@mantine/dropzone` / `@mantine/spotlight`
- `@tabler/icons-react`、`dayjs`、`embla-carousel`、`shiki`

## ファイル構成

| パス | 役割 |
| --- | --- |
| `app/layout.tsx` | Mantine の CSS と `ColorSchemeScript` を読み込む |
| `app/mantine-styles.ts` | `@mantine/core` と拡張パッケージの CSS を読み込む（パッケージを追加・削除したらここを編集する） |
| `app/providers.tsx` | `MantineProvider` と code-highlight の Shiki アダプターを設定する（Client Component） |
| `theme.ts` | Mantine のテーマ設定 |
| `postcss.config.cjs` | `postcss-preset-mantine` とブレークポイント変数の設定 |

`@mantine/core` のコンポーネントはそのまま Server Component から使えます。`useMantineColorScheme` などの hooks を使うコンポーネントには `'use client'` を付けてください。
