import {
  NavigationContainer,
  NavLinks,
  NavLink,
  MenuIcon,
  MenuIconContainer,
  NavItem,
} from "./navigation.styles";
import { Outlet } from "react-router-dom";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";
import { useState } from "react";
import Logo from "../../components/logo/logo.component";
import Footer from "../../components/footer/footer.component";
import { useWindowSize } from "../../utils/responsive.helper";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeDropdown = () => setClick(false);

  const isWide = useWindowSize();

  return (
    <>
      <NavigationContainer>
        <Logo />
        <MenuIconContainer onClick={handleClick}>
          <MenuIcon className={click ? "fas fa-times" : "fas fa-bars"} />
        </MenuIconContainer>

        <NavLinks isClicked={click}>
          <NavItem>
            <NavLink to="/about" onClick={closeDropdown}>
              ABOUT ME
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/videos" onClick={closeDropdown}>
              VIDEOS
            </NavLink>
          </NavItem>

          <NavItem
            onClick={() => navigator.clipboard.writeText("james@seenit.io")}
          >
            {
              <Link to="/contact" onClick={closeDropdown}>
                {isWide ? (
                  <Button buttonType={BUTTON_TYPE_CLASSES.contact}>
                    CONTACT ME
                  </Button>
                ) : (
                  <NavLink as="span">CONTACT ME</NavLink>
                )}
              </Link>
            }
          </NavItem>
        </NavLinks>
      </NavigationContainer>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navigation;
