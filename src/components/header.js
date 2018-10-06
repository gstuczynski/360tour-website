import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Link from 'gatsby-link';
import style from '../styles/header.module.styl';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.onScroll = this.onScroll.bind(this);
    this.toggleNav = this.toggleNav.bind(this);

    this.state = {
      isNavOpen: false,
      isScrollingUp: true,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    this.previousPos = window.pageYOffset;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll() {
    const currentPos = window.pageYOffset;
    if (this.previousPos > currentPos || this.previousPos < 0) {
      this.setState({ isScrollingUp: true });
    } else {
      this.setState({ isScrollingUp: false });
    }
    this.previousPos = currentPos;
  }

  toggleNav() {
    const { isNavOpen } = this.state;
    this.setState({
      isNavOpen: !isNavOpen,
    });
  }

  closeNav = () => {
    this.setState({
      isNavOpen: false,
    });
  };

  render() {
    const { isScrollingUp } = this.state;
    const headerStyle = {
      top: isScrollingUp ? 0 : -150,
    };
    return (
      <Navbar light expand="md" className={style.header} style={headerStyle}>
        <div>
          <NavbarBrand href="/" className={style.logo}>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} className="mr-2" />
        </div>
        <Collapse
          isOpen={this.state.isNavOpen}
          navbar
          // Without these props set to false, component won't collapse properly
          enter={false}
          exit={false}>
          <Nav className={style.navigation} navbar left>
            <NavItem onClick={this.closeNav}>
              <NavLink tag="span">
                <Link to="/tours/" activeClassName={style.activeLink}>
                  Tours
                </Link>
                <div />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
