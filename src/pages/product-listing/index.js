import Layout from "@/components/layout";
import Styles from "./ProductListing.module.css";
import Banner from "@/components/banner";
import Breadcrumbs from "@/components/breadcrumbs";
import LayoutProductListing from "@/components/filters/LayoutProductListing";
import FiltersList from "@/components/filters/filters-list";
import FilterApplied from "@/components/filters/filters-applied";

export default function ProductListing() {
  return (
    <>
      <Layout>
        <Banner />
        <Breadcrumbs />
        <LayoutProductListing>
          <FiltersList />
          <FilterApplied />
        </LayoutProductListing>
      </Layout>
    </>
  );
}
