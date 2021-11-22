import React, { useState } from "react";
import { Section } from "../styles/GlobalStyles";
import {
  NavContainer,
  LinksContainer,
  LogoContainer,
  NavLink,
  Logo,
  SidebarContainer,
  Menu,
  Close,
} from "./NavigationElements";

const Navigation = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleMenu = () => {
    setIsOpened(!isOpened);
  };

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
          <SidebarContainer>
            {!isOpened ? (
              <Menu onClick={handleMenu} />
            ) : (
              <Close onClick={handleMenu} />
            )}
          </SidebarContainer>
        </NavContainer>
      </Section>
    </>
  );
};

export default Navigation;
