import "@/styles/globals.css";
import { roboto } from "@/styles/fonts";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import store from "@/redux/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

let persistor = persistStore(store);

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <main
          style={{
            minHeight: "100vh",
            width: "100%",
            position: "relative",
            paddingBottom: "5em",
            backgroundColor: "#d4d4d4",
          }}
          className={roboto.className}
        >
          <>
            <Navbar />
            <div style={{ minHeight: "100%" }}>
              <Component {...pageProps} />
            </div>
            <Footer />
          </>
        </main>
      </PersistGate>
    </Provider>
  );
}
