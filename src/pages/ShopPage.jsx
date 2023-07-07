import { Component } from "react";
import SHOP_DATA from "../data/shop.js";
import PreviewCollection from "../components/PreviewCollection.jsx";

class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionData }) => (
          <PreviewCollection key={id} {...otherCollectionData} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
