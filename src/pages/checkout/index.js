import Layout from "../../components/layout";
import BannerSmall from "@/components/banner-small";
import Checkout from "@/components/checkout";

export default function Cart() {
  return (
    <>
      <Layout>
        <BannerSmall />
        <Checkout />
      </Layout>
    </>
  );
}
