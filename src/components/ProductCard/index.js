import "./index.css";

const ProductCard = (props) => {
  const { dt } = props;
  const { url, name, price, mrp } = dt;

  return (
    <div className="card-bg">
      <img
        className="tag"
        src="https://res.cloudinary.com/dvzlfmmcb/image/upload/v1713061253/Bookmarksymbol_gjzgym.png"
        alt="tag"
      />
      <img className="card-img" src={url} alt={name} />

      <h3 className="heading-card">{name}</h3>
      <div className="price-align">
        <p>
          <span className="price">${price} </span>
          <del className="del">{mrp}</del>{" "}
          <span className="offer">(50% off)</span>
        </p>

        <img
          className="bag-img"
          src="https://res.cloudinary.com/dvzlfmmcb/image/upload/v1713061254/Group_450bag_icon_cu6s0d.png"
          alt="bag"
        />
      </div>
    </div>
  );
};

export default ProductCard;
