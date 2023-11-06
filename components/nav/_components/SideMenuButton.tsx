"use client";

interface MenuButtonProps {
  menuClicked: boolean;
  setMenuClicked: Function;
}

const SideMenuButton: React.FC<MenuButtonProps> = ({
  menuClicked,
  setMenuClicked,
}) => (
  <button
    onClick={() => setMenuClicked(!menuClicked)}
    className="btn btn-square btn-ghost mt-6 ml-6"
  >
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
);

export default SideMenuButton;
