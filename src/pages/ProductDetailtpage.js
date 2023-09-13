import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProducDetailtpage = ({ item }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    const url = `https://my-json-server.typicode.com/RumaStudy/kolonmallrepo/products?q=${keyword}`;
    const response = await fetch(url);
    const fetchResult = await response.json();
    setProduct(fetchResult);
  };
  useEffect(() => {
    getProductDetail();
    return;
  }, []);

  return (
    <article>
      <div className="productImg">
        <img src={product.img} alt="제품 상세이미지" />
      </div>
      <div className="productInfo">
        <h2>제품명: {product.title}</h2>
        <h3>가격: {product?.price}원</h3>
        <form>
          <select name="" id="">
            <option value=""></option>
          </select>
        </form>
      </div>
    </article>
  );
};

export default ProducDetailtpage;
