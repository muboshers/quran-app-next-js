import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../src/store";
<<<<<<< HEAD
import "styles/globals.css";
=======
>>>>>>> 799e1c6a9e40db6994b1160ed2db835998adac7a

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
