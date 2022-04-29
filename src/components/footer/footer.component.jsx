import { FooterContainer, ContactWrapper } from "./footer.styles";
import Logo from "../logo/logo.component";
import SeenitLogo from "../seenit-logo/seenit-logo.component";
import { useEffect, useState } from "react";
import { useWindowSize } from "../../utils/responsive.helper";

const Footer = () => {
  const isWide = useWindowSize();

  return (
    <FooterContainer>
      <Logo />
      <SeenitLogo />
    </FooterContainer>
  );
};

export default Footer;
