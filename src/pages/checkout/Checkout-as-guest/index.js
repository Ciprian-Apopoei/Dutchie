import Layout from "@/components/layout";
import BannerSmall from "@/components/banner-small";
import SuccessPayment from "@/components/checkout/success-payment";

export default function CheckoutGuest() {
  return (
    <>
      <Layout>
        <BannerSmall />
        <SuccessPayment />
      </Layout>
    </>
  );
}
