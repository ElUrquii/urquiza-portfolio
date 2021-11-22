import React from "react";
import { Section } from "../styles/GlobalStyles";
import {
  NavContainer,
  LinksContainer,
  LogoContainer,
  NavLink,
  Logo,
} from "./NavigationElements";

const Navigation = () => {
  return (
    <>
      <Section>
        <NavContainer>
          <LogoContainer>
            <Logo>Portfolio</Logo>
          </LogoContainer>
          <LinksContainer>
            <NavLink>About</NavLink>
            <NavLink>Portfolio</NavLink>
            <NavLink>Contact</NavLink>
          </LinksContainer>
        </NavContainer>
      </Section>
    </>
  );
};

export default Navigation;
