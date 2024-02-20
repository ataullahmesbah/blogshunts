import Accordion from "@/components/Home/Accordion";
import Banner from "@/components/Home/Banner";
import ExcellenceHub from "@/components/Home/ExcellenceHub";
import HyasckaContact from "@/components/Home/HyasckaContact";
import Services from "@/components/Home/Services";
import TeamWork from "@/components/Home/TeamWork";
import Image from "next/image";

export const metadata = {
  title: 'Hyascka - Your Digital Success Partner',
  description: 'Discover the story behind Hyascka, your trusted partner for digital success. Learn about our journey, mission, and commitment to driving growth for businesses through innovative digital marketing strategies and expert web development services.',
};


export default function Home() {
  return (
    <main className="">
      <Banner />
      <Services />
      <ExcellenceHub />
      <TeamWork />
      {/*  */}

      <HyasckaContact />
    </main>
  );
}
