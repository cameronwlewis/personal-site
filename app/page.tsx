import Image from "next/image";
import logo from "../assets/cameron-logo.svg";
import Menu from "@/components/Menu";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main className="bg-black ">
      <div className="bg-[url('../assets/layered-leaves-flipped-gradient3.jpg')] bg-auto bg-no-repeat">
        <div className="bg-gradient-to-b from-black from-2% to-transparent to-10%">
          <div className="h-screen container mx-auto ">
            <Menu />
            <div className="mt-40 flex justify-center lg:flex-none lg:justify-end lg:mr-52 lg:mt-52">
              <div className="lg:float-right">
                <Image src={logo} alt={"cameron lewis logo"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        /* <div className="container mx-auto text-white">
        <h1 className="text-2xl">A classy guy that can't be beat.</h1>
        <Timeline />
      </div> */
      }
    </main>
  );
}
