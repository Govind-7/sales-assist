import Navbar from "../Navbar";
import ProductCard from "../ProductCard";
import "./index.css";

const obj = [
  {
    url:
      "https://res.cloudinary.com/dvzlfmmcb/image/upload/v1713060158/SIPR04031_01_1gr4_yvbmga.png",
    name: "Metro Movers Black",
    price: 4899,
    mrp: 8999,
  },
  {
    url:
      "https://res.cloudinary.com/dvzlfmmcb/image/upload/v1713060296/SIPR04086_01_1gr3_xkyx5r.png",
    name: "Metro Movers Black",
    price: 4899,
    mrp: 8999,
  },
  {
    url:
      "https://res.cloudinary.com/dvzlfmmcb/image/upload/v1713060320/Mask_groupgr1_sfrxmt.png",
    name: "The Brown Metro Movers",
    price: 4899,
    mrp: 8999,
  },
  {
    url:
      "https://res.cloudinary.com/dvzlfmmcb/image/upload/v1713060365/SIPR04085_01_1gr2_wnz3tr.png",
    name: "Metro Movers Black",
    price: 4899,
    mrp: 8999,
  },
  {
    url:
      "https://res.cloudinary.com/dvzlfmmcb/image/upload/v1713060158/SIPR04031_01_1gr4_yvbmga.png",
    name: "Metro Movers Black",
    price: 4899,
    mrp: 8999,
  },
  {
    url:
      "https://res.cloudinary.com/dvzlfmmcb/image/upload/v1713060296/SIPR04086_01_1gr3_xkyx5r.png",
    name: "Metro Movers Black",
    price: 4899,
    mrp: 8999,
  },
  {
    url:
      "https://res.cloudinary.com/dvzlfmmcb/image/upload/v1713060320/Mask_groupgr1_sfrxmt.png",
    name: "The Brown Metro Movers",
    price: 4899,
    mrp: 8999,
  },
  {
    url:
      "https://res.cloudinary.com/dvzlfmmcb/image/upload/v1713060365/SIPR04085_01_1gr2_wnz3tr.png",
    name: "Metro Movers Black",
    price: 4899,
    mrp: 8999,
  },
];

const Home = () => (
  <div className="home-bg">
    <Navbar />
    <div className="product-container">
      {obj.map((item) => (
        <ProductCard dt={item} />
      ))}
    </div>
  </div>
);

export default Home;
