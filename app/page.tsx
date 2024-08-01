import Company from "@/components/Company";
import Data from "@/components/Data";
import Footer from "@/components/Footer";
import InsightCorner from "@/components/InsightCorner";
import MainHead from "@/components/MainHead";
import Pipeline from "@/components/Pipeline";
import Revenue from "@/components/Revenue";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <>
    <MainHead/>
    <Company/>
    <Data/>
    <Revenue/>
    <Pipeline/>
    <Testimonials/>
    <InsightCorner/>
    <Footer/>
    </>
  );
}
