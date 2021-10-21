import React from "react";

const renderCategories = (categories) => {
  const categoriesComponentArr = [];
  const length = categories.length;
  for (let i = 0; i < length; i++) {
    const category = categories[i];

    const categoryComponent = (
      <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" key={i}>
        <div className="shop-cat-box">
          <img className="img-fluid" src={category.image} alt="" />
          <a className="btn hvr-hover" href="#">
            {category.name}
          </a>
        </div>
      </div>
    );

    categoriesComponentArr.push(categoryComponent);
  }

  return categoriesComponentArr;
};

const ShopCategories = ({ categories }) => {
  return (
    <div className="categories-shop">
      <div className="container">
        <div className="row">{renderCategories(categories)}</div>
      </div>
    </div>
  );
};

export default ShopCategories;
