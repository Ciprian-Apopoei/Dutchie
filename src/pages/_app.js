import "@/styles/globals.css";
import { CartProvider } from "@/components/context/cartContext";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
