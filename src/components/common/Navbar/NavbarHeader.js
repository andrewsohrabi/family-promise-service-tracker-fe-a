import React from 'react';
import PropTypes from 'prop-types';
import HamburgerMenu from './HamburgerMenu';
import logo from '../../../assets/logo.png';

const NavbarHeader = props => {
  return (
    <div className={props.classType} style={{ display: 'flex' }}>
      <HamburgerMenu />
      <div style={{ paddingLeft: 100 }}>
        <img src={logo} style={{ width: 350 }} alt="family promise logo" />
      </div>
      {/* do classses instead of inline styling */}
    </div>
  );
};

NavbarHeader.propTypes = {
  classType: PropTypes.string,
};

export default NavbarHeader;