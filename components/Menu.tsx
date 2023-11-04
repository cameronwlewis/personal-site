import Link from "next/link";
import SideMenu from "./SideMenu";

const Menu = () => (
  <>
    <div className="hidden md:flex font-mono pt-5 text-white">
      {/* eslint-disable-next-line */}
      <Link className="flex-auto" href={"/"}>
        // home
      </Link>
      {/* eslint-disable-next-line */}
      <Link className="flex-auto" href={"/expertise"}>
        // expertise
      </Link>
      {/* eslint-disable-next-line */}
      <div className="flex-auto text-gray-400">// work</div>
      {/* eslint-disable-next-line */}
      <div className="flex-auto text-gray-400">// experience</div>
      {/* eslint-disable-next-line */}
      <div className="flex-auto text-gray-400">// contact</div>
    </div>
    <div className="md:hidden">
      {/* <SideMenu /> */}
      <button className="mt-6 ml-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-8 h-8 stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>
  </>
);

export default Menu;
