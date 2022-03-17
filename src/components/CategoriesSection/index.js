import React from "react";
import Badge from "react-bootstrap/Badge";
import categories from "../../data/categories.json";
function CategoriesSection() {
  console.log("🚀 ~ file: index.js ~ line 4 ~ categories", categories);
  //iteramos categorias para poner un estado por cada categoria
  let favs = {};
  categories.forEach((category) => {
    /*const [category, setCarrito] = React.useState(0);*/
    favs[`${category}`] = false;
  });
  console.log(favs);
  const [favorites, setFavorites] = React.useState(favs);
  const addFav = () => console.log("addFav");

  return (
    <div style={{ margin: "2rem 0" }}>
      <h4>Categories</h4>
      {categories.map((category) => {
        return (
          <>
            <Badge key={category} pill className="mr-3">
              {category}
            </Badge>
            <span onClick={addFav} className="disabled badge ">
              ♥
            </span>
            {/*
            El siguiente paso es que lea el elemento por categoria 
            <Badge
              key={"fav-" + category}
              onClick={addFav}
              className="disabled"
              disabled
            >
              ♥
            </Badge>
            */}
          </>
        );
      })}
    </div>
  );
}

export default CategoriesSection;
