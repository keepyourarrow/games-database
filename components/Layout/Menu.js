import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getIcon } from "utils/icon";
import { MenuOverlay, MenuWrapper } from "./Layout.styled";
import Sidebar from "./Sidebar";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const { asPath } = useRouter();

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(false);
  }, [asPath]);

  return (
    <>
      <MenuIcon handleClick={handleClick} />

      {open && (
        <MenuWrapper>
          <MenuIcon handleClick={handleClick} />
          <Sidebar />
        </MenuWrapper>
      )}
      {open && <MenuOverlay onClick={handleClick} />}
    </>
  );
};

const MenuIcon = ({ handleClick }) => {
  return (
    <div type="button" onClick={handleClick}>
      {getIcon("menu")}
    </div>
  );
};

export default Menu;
