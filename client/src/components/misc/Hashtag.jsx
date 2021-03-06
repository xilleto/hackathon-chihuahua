import React from "react";
import { Link } from "react-router-dom";
const Hashtag = ({ tag, name, id }) => {
  return (
    <div className="p-1 my-1 ">
      <Link
        to={`/t/${name.replace(/^#+/i, "")}`}
        // to={`/t/${id}`}
        className="cursor-pointer rounded-full  text-sm font-bold  text-gray-800"
      >
        {name}
      </Link>
      <p className="text-xs mt-1 ">
        {tag.post_count} {parseInt(tag.post_count) > 1 ? "Posts" : "Post"}
      </p>
    </div>
  );
};

export default Hashtag;
