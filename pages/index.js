import Head from "next/head";
import Image from "next/image";
import FeatureProduct  from "../components/featureProduct/FeatureProduct";
import { HeroSlider } from "../components/heroSlider/HeroSlider";
import  ShopCategoriesContainer  from "../components/shopCategories/ShopCategories.Container";
// import { ShopCategories } from "../components/shopCategories/ShopCategories";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ShopCategoriesContainer />
      <FeatureProduct />
    </>
  );
}
