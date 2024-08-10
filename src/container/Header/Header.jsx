import React from "react";

import "./Header.css";
import { SubHeading } from "../../components";
import { images } from "../../constants";
const Header = () => (
  <div className="app__header app__wrapper section__padding" id="header">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The key to Fine Dining</h1>
    </div>
    <div className="app__wrapper_img"></div>
  </div>
);

export default Header;
