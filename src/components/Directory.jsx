import { Component } from "react";
import MenuItem from "./MenuItem";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          path: "/hats",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
        },
        {
          title: "women",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
        },
        {
          title: "men",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, id, imageUrl, size, path }) => (
          <MenuItem
            path={path}
            key={id}
            title={title}
            imgUrl={imageUrl}
            size={size}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
