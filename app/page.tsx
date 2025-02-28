import { getAllPostsMeta } from "@/mdx";

import BackToTop from "./backToTop";
import HomePage from "./(main)/page";

export const metadata = {
  title: "Home - Online Courses & Education NEXTJS14 Template",
  description: "Online Courses & Education NEXTJS14 Template",
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
