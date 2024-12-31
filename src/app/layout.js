import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Head from "next/head";
import { AuthProvider } from "../../api/AuthContext";

export const metadata = {
  title: "Mojo Infinity",
  description: "Reimagined for Superior Results!",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link
          rel="icon"
          type="image/png"
          href="https://st.mojoinfinity.com/images/favicon-32x32.png"
          sizes="32x32"
        ></link>
        <link
          rel="icon"
          type="image/png"
          href="https://st.mojoinfinity.com/images/favicon-16x16.png"
          sizes="16x16"
        ></link>
        <link
          rel="shortcut icon"
          href="https://st.mojoinfinity.com/images/favicon.ico"
        ></link>
      </Head>
      <html lang="en">
        <body>
          <AuthProvider>
            <main className="pagecontent">
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
