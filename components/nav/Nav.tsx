import MenuButton from "./_components/MenuBotton";
import SideMenu from "./_components/SideMenu";
import TopMenu from "./_components/TopMenu";

const Nav = () => (
  <>
    <div className="hidden md:flex font-mono pt-5 text-white">
      <TopMenu />
    </div>
    <div className="md:hidden">
      <MenuButton />
      <SideMenu />
    </div>
  </>
);

export default Nav;
