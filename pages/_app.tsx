import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../src/store";
import "styles/globals.css";
import "styles/bootstrap-grid.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
