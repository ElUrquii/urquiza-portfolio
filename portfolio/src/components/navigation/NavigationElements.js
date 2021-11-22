import styled from "styled-components";

// border-b-2 border-medium-champagne rounded-sm
export const NavContainer = styled.div.attrs({
  className: "grid grid-cols-2  sticky px-3 py-3",
})``;

export const LogoContainer = styled.div.attrs({
  className: "flex justify-start",
})``;

export const LinksContainer = styled.div.attrs({
  className: "flex justify-end",
})``;

export const NavLink = styled.p.attrs({
  className: "text-medium-champagne cursor-pointer px-5",
})``;

export const Logo = styled.h1.attrs({
  className: "text-medium-champagne cursor-pointer px-5 text-xl",
})``;
