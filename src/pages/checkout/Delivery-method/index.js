import Layout from "@/components/layout";
import BannerSmall from "@/components/banner-small";
import DeliveryStep from "@/components/checkout/delivery-step";

export default function DeliveryMethod() {
  return (
    <>
      <Layout>
        <BannerSmall />
        <DeliveryStep />
      </Layout>
    </>
  );
}
