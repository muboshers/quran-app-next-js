import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript,
} from "next/document";
import {ServerStyleSheet} from "styled-components";

function MyDocument() {
    return (
        <Html>
            <Head>
                <meta name="Ecommerce" content="The best marketplace ever"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.1.1/css/all.css" />
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
    const originalRenderPage = ctx.renderPage;
    const sheet = new ServerStyleSheet();

    try {
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App: any) => (props) =>
                    sheet.collectStyles(<App {...props} />),
            });
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>
            ),
        };
    } finally {
        sheet.seal();
    }
};

export default MyDocument;
