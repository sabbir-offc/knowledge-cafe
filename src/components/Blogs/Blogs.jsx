import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Blog from "../Blog/Blog";

const Blogs = ({ handleToAddBookmark }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <h2 className="text-3xl">Blogs</h2>
      <div className="grid grid-cols-1 place-items-center">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleToAddBookmark={handleToAddBookmark}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

Blogs.propTypes = {
  handleToAddBookmark: PropTypes.func,
};
export default Blogs;
