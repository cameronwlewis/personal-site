import Image from "next/image";
import logo from "../assets/cameron-logo.svg";

export default function Home() {
  return (
    <main>
      <div className="h-screen bg-black bg-[url('../assets/layered-leaves-flipped.jpg')] bg-contain bg-no-repeat">
        <div className="bg-gradient-to-b from-black from-2% to-transparent to-10%">
        <div className="m-auto w-screen h-screen bg-gradient-to-r from-transparent from-10% to-black to-80%">
          <div className="container mx-auto font-mono text-white pt-5 ">
            <div className="grid grid-cols-5">
              {/* eslint-disable-next-line */}
              <div>// home</div>
               {/* eslint-disable-next-line */}
              <div>// expertise</div>
               {/* eslint-disable-next-line */}
              <div>// work</div>
               {/* eslint-disable-next-line */}
              <div>// experience</div>
               {/* eslint-disable-next-line */}
              <div>// contact</div>
            </div>
            <div className="mr-[200px] mt-[200px]">
              <div className="float-right">
                <Image src={logo} alt={""} />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}
