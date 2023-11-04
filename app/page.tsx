import Image from "next/image";
import logo from "../assets/cameron-logo.svg";
import Timeline from "@/components/Timeline";
import Nav from "@/components/nav/Nav";

export default function Home() {
  return (
    <main className="bg-black ">
      <div className="bg-foliage-hero bg-auto bg-no-repeat">
        <div className="bg-gradient-to-b from-black from-2% to-transparent to-10% ">
          <div className="h-screen container mx-auto ">
            <Nav />
            <div className="pt-52 flex justify-center md:pt-52 lg:flex-none lg:justify-end lg:mr-52">
              <div className="lg:float-right">
                <Image src={logo} alt={"cameron lewis logo"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        <div className="container mx-auto text-white">
          <h1 className="text-2xl">A classy guy that cannot be beat.</h1>
          <Timeline />
        </div>
      }
    </main>
  );
}
