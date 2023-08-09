import Layout from "@/components/layout";
import BannerSmall from "@/components/banner-small";
import PaymentStep from "@/components/checkout/payment-step";

export default function PaymentMethod() {
  return (
    <>
      <Layout>
        <BannerSmall />
        <PaymentStep />
      </Layout>
    </>
  );
}
