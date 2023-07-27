import Layout from "@/components/layout";
import Breadcrumbs from "@/components/breadcrumbs";
import ProductDetailsWrapper from "@/components/product-details/product-details-wrapper";

export default function ProductDetails() {
  return (
    <>
      <Layout>
        <Breadcrumbs />
        <ProductDetailsWrapper />
      </Layout>
    </>
  );
}
