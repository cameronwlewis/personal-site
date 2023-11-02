import Link from "next/link";

const Menu = ({ textColor = "text-white" }) => (
  <div className={`grid grid-cols-5 font-mono pt-5 ${textColor}`}>
    {/* eslint-disable-next-line */}
    <Link href={"/"}>// home</Link>
    {/* eslint-disable-next-line */}
    <Link href={"/expertise"}>// expertise</Link>
    {/* eslint-disable-next-line */}
    <div className="text-gray-400">// work</div>
    {/* eslint-disable-next-line */}
    <div className="text-gray-400">// experience</div>
    {/* eslint-disable-next-line */}
    <div className="text-gray-400">// contact</div>
  </div>
);

export default Menu;
