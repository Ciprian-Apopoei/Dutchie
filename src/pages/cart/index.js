import Layout from "../../components/layout";
import BannerSmall from "@/components/banner-small";
import CartWrapper from "@/components/cart/cart-wrapper";
import BottomBtn from "@/components/cart/bottom-btn";

export default function Cart() {
  return (
    <>
      <Layout>
        <BannerSmall />
        <CartWrapper />
        <BottomBtn />
      </Layout>
    </>
  );
}
