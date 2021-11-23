import styled from "styled-components";
import { FaIoxhost, FaGg } from "react-icons/fa";

// border-b-2 border-medium-champagne rounded-sm
export const NavContainer = styled.div.attrs({
  className: "grid grid-cols-2  sticky px-3 py-5",
})``;

export const LogoContainer = styled.div.attrs({
  className: "flex justify-start",
})``;

export const LinksContainer = styled.div.attrs({
  className: "hidden md:flex md:justify-end",
})``;

export const NavLink = styled.p.attrs({
  className:
    "text-medium-champagne cursor-pointer px-5 transition duration-200 ease-in-out hover:text-middleblue-green ",
})``;

export const Logo = styled.h1.attrs({
  className: "text-medium-champagne cursor-pointer px-5 text-xl",
})``;

export const SidebarContainer = styled.div.attrs({
  className: "flex justify-end md:hidden px-5",
})``;

export const Menu = styled(FaIoxhost).attrs({
  className: "stroke-current text-medium-champagne text-3xl cursor-pointer",
})``;

export const Close = styled(FaGg).attrs({
  className: "stroke-current text-medium-champagne text-3xl cursor-pointer",
})``;
