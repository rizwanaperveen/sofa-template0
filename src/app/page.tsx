'use client'
import Hero from "@/components/Hero";
import Content from "@/components/Content"; 
import Toppicks from "@/components/Toppicks";
import Sofa from "@/components/Sofa";
import Blogs from "@/components/Blog";
import Insta from "@/components/Insta";
import Templ0 from "@/components/Templ0";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";




export default function Home() {
  return (
    <div>
  <Navbar />
      <Hero />
    <Templ0 />
      <Content />
      <Toppicks />
      <Sofa />
      <Blogs />
    
      <Insta />
      <Footer />
    
    

    </div>
  );
}
