import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/layout";
import HeroHeader from "@/components/hero-header";
import CategoryGrid from "@/components/category-grid";
import ProductSlider from "@/components/product-slider";
import Offers from "@/components/offers";
import Contact from "@/components/contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head />
      <Layout>
        <HeroHeader />
        <CategoryGrid />
        <ProductSlider />
        <Offers />
        <Contact />
      </Layout>
    </>
  );
}
