import "./category.css";


interface CategoryProps {
    name : string,
    desc : string,
    image : any
}

const Category = ({ name, desc, image }: CategoryProps) => {
//   const handleClick = () => {
//     <Link to="/products" />;
//   };
  return (
    <div className="category">
      <div className="absoluteBackground" />
      <div className="categoryImageContainer">
        <img src={image} alt="Category" className="categoryImage" />
      </div>
      <span className="categoryName">{name}</span>
      <span className="categoryDescription">{desc}</span>

      <button className="categoryButton">SHOP NOW</button>
    </div>
  );
};

export default Category;
