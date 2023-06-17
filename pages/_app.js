import "@/styles/globals.css";

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
        <div style={{ minHeight: "100vh", width: "100%" }}>
          <>
            <Navbar />
            <main>
              <Component {...pageProps} />
            </main>
            <Footer />
          </>
        </div>
      </PersistGate>
    </Provider>
  );
}
