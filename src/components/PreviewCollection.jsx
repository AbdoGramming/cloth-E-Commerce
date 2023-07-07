import CollectionItem from "./CollectionItem";

const PreviewCollection = ({ title, items }) => {
  return (
    <div>
      <div className="preview-collection">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
          {items
            .filter((i, idx) => idx < 4)
            .map(({ id, ...itemProps }) => (
              <CollectionItem key={id} {...itemProps} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PreviewCollection;
