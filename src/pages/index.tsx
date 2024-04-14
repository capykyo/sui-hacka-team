import Masthead from "@/components/masthead";
import AboutUs from "@/components/aboutus";
import Skills from "@/components/skills";
import Works from "@/components/works";
import TrustedBy from "@/components/trustedby";
import ContactUs from "@/components/contactus";
import Footer from "@/components/footer";
import useSWR from "swr";

const fetcher = (url: string) => {
  return fetch(url).then((res) => res.json());
};

export default function Home() {
  const { data } = useSWR("/api/stats", fetcher);

  return (
    <div>
      <Masthead />
      <AboutUs />
      <Skills commits={data?.commits} />
      <Works />
      <TrustedBy />
      <ContactUs />
      <Footer />
    </div>
  );
}
