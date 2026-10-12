// @mantine/* パッケージの CSS をここに集め、パッケージの追加・削除で app/layout.tsx を編集しなくて済むようにする。
// core 以外のパッケージの CSS は core の CSS を上書きする前提なので、core を先頭に置く。
// この順序は oxfmt の設定（oxc-config-mantine の core_styles グループ）でも維持される。
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/spotlight/styles.css';
