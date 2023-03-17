import React from "react";

import "./Banner.css";

function Banner() {
  
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
          
            <select className="categories"
            >
              <option value="null">ALL CATEGORIES</option>
              <option value="Cars">Cars</option>
              <option value="Cameras & Lenses">Cameras & Lenses</option>
              <option value="Computers & Laptops">Computers & Laptops</option>
              <option value="Mobile Phones">Mobile Phones</option>
              <option value="Motorcycles">Motorcycles</option>
              <option value="Tablets">Tablets</option>
            </select>
          </div>
          <div className="otherQuickOptions">
            <span>Cars</span>
            <span>Cameras & Lenses</span>
            <span>Computers & Laptops</span>
            <span>Mobile Phones</span>
            <span>Motorcycles</span>
            <span>Tablets</span>
          </div>
        </div>
        <div className="banner">
          {/* <img src="https://statics.olx.in/olxin/banners/hero_bg_in_v4@1x.png" className="img" alt="" /> */}
        </div>
      </div>
    </div>
  );
}

export default Banner;
