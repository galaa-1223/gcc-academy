import { getAllPostsMeta } from "@/mdx";

import BackToTop from "./backToTop";
import HomePage from "./(main)/page";

export const metadata = {
  title: "GCC-Academy",
  description: "Голомт капитал сургалтын сайт",
};

export default async function Home() {

  const blog = await getAllPostsMeta();

  return (
    <main>
      <HomePage getBlog={blog} />
      <BackToTop />
    </main>
  );
}
