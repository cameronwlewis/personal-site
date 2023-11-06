import Link from "next/link";

const TopMenu: React.FC = () => (
  <>
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
  </>
);

export default TopMenu;
