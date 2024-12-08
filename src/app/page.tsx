import Image from "next/image";
import Headerandhero from "../Components/Headerandhero";
import Editor from "../Components/Editor";
import Featured from "../Components/Featured";
import Product from "../Components/Product";
import Universe from "../Components/Universe";
import Post from "../Components/Post";
import Footer from "../Components/Footer";

export default function Home() {
  return (
   <>
   <Headerandhero/>
   <Editor />
   <Featured/>
   <Product />
   <Universe />
   <Post />
   <Footer />
   </>
  );
}
