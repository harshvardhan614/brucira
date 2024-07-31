import Company from "@/components/Company";
import Data from "@/components/Data";
import Footer from "@/components/Footer";
import MainHead from "@/components/MainHead";
import Image from "next/image";


export default function Home() {
  return (
    <>
    <MainHead/>
    <Company/>
    <Data/>
    <Footer/>
    </>
  );
}
