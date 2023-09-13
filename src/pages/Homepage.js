import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  /* useNavigate 선언 */
  const navi = useNavigate();
  /* navi 내부 주소 설정 */
  const gotoProductDetail = () => {
    navi("pages/ProductDetailtpage/:id");
  };
  const gotoProduct = () => {
    navi("Product?=detail");
  };

  return (
    <div>
      <div className="inner">
        <Link to="/ProductAllpage">링크</Link>
        <br />
        <button onClick={gotoProductDetail}>Product Details 클릭</button>
        <button onClick={gotoProduct}>Product 클릭</button>
      </div>
    </div>
  );
};

export default Homepage;
