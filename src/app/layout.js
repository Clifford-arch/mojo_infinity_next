import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Head from "next/head";
import { AuthProvider } from "../../api/AuthContext";
import { DM_Sans } from "next/font/google";

const DM_init = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
});

export const metadata = {
  title: "Mojo Infinity",
  description: "Reimagined for Superior Results!",
};

export default function RootLayout({ children }) {
  return (
    <>
      {/* <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>

        <link
          rel="icon"
          type="image/png"
          href="src/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="src/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="shortcut icon"
          href="https://st.mojoinfinity.com/images/favicon.ico"
          sizes="any"
        />
      </Head> */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          href="https://st.mojoinfinity.com/images/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://st.mojoinfinity.com/images/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://st.mojoinfinity.com/images/favicon.ico"
        />
      </Head>

      <html lang="en">
        <body className={`${DM_init.variable}`}>
          <AuthProvider>
            <main className="pagecontent dmsans">
              <Header />
              {children}
              <Footer />
            </main>
          </AuthProvider>
        </body>
      </html>
    </>
  );
}
