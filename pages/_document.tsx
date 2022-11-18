import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { resetServerContext } from "react-beautiful-dnd";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    resetServerContext();
    const page = await ctx.renderPage();
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, ...page };
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta name="description" content="Zustand example" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}