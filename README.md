## 概要

素のNext.js（TypeScript）アプリに、Material UIを導入する。

## 作業手順

### Next.jsアプリを作成

```bash
yarn create next-app next-materialui --example=with-typescript
```


### Material UIライブラリをインストール
```bash
yarn add @material-ui/core @material-ui/styles @material-ui/icons
```

### them.tsを作成

色やフォントなどをカスタマイズするためのファイルを作成。

```ts
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
```

### _app.tsxを作成

```tsx
import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppProps } from 'next/app';

import theme from '../theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;


```


### _document.tsxを作成

Material UIで使うフォントを読み込む。

```tsx
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;

```

### 全コンポーネントでthemeを読み込むように設定

`pages/_app.tsx`と`pages/_document.tsx`を作成する。

```tsx
// _app.tsx

import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppProps } from 'next/app';

import theme from '../theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;

```

```tsx
// _document.tsx
// SSRするなら別途対応が必要
// SSR参考:https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js

import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../theme';

class Document extends NextDocument {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          <meta name='theme-color' content={theme.palette.primary.main} />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
```

### indexとaboutページを書き換え

よしなに。


### 参考
- Material-ui公式サンプル:[material-ui/examples/nextjs at master · mui-org/material-ui · GitHub](https://github.com/mui-org/material-ui/tree/master/examples/nextjs)
- [Material-UIとstyled componentsで，next.jsのcssをいい感じに管理する (Jest/TypeScript対応版) - Qiita](https://qiita.com/o3c9/items/2551820edc156704edba#6-material-ui--styled-components%E3%81%AE%E5%B0%8E%E5%85%A5)
