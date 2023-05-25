import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <div style={{ minHeight: "100vh", width: "100%" }}>
      <>
        <Navbar />
        <main >
          <Component {...pageProps} />
        </main>
      </>
    </div>
  );
}
