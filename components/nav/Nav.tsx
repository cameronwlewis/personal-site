// import MenuButton from "./_components/MenuButton";
import SideMenu from "./_components/SideMenu";
import TopMenu from "./_components/TopMenu";

const Nav: React.FC = () => (
  <>
    <div className="hidden md:flex font-mono pt-5 text-white">
      <TopMenu />
    </div>
    <div className="md:hidden absolute">
      <SideMenu />
    </div>
  </>
);

export default Nav;
