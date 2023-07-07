import { useNavigate } from "react-router-dom";

const MenuItem = ({ title, imgUrl, size, path }) => {
  const navigation = useNavigate();
  return (
    <div
      className={`menu-item ${size}`}
      onClick={path ? () => navigation(path) : null}
    >
      <div
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
