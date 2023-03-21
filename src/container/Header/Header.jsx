import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";

import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="section__padding app__header app__wrapper" id="Home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
        accusantium velit, sit perspiciatis doloribus nostrum distinctio tenetur
        delectus repudiandae mollitia?
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header" />
    </div>
  </div>
);

export default Header;
