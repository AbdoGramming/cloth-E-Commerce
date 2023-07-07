const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div
        className="img"
        style={{
          background: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
