import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({ blog, handleToAddBookmark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,
    hashtags,
    reading_time,
  } = blog;
  // console.log(blog);
  return (
    <div className="my-9 w-fit shadow-lg dark:shadow-slate-400 rounded-md">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={cover}
            alt={`cover picture of - ${title}`}
            className="mb-5"
          />
        </figure>
        <div className="card-body">
          <div className="flex items-center justify-between">
            <div className="flex gap-6 items-center">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img src={author_img} />
                </div>
              </div>{" "}
              <div>
                <h3 className="font-bold text-xl md:text-2xl text-black dark:text-white">
                  {author}
                </h3>
                <p>{posted_date}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <p>{reading_time} minute read</p>
              <button
                className="text-xl"
                onClick={() => handleToAddBookmark(blog)}
              >
                <FaRegBookmark></FaRegBookmark>
              </button>
            </div>
          </div>

          <h2 className="card-title text-2xl md:text-4xl font-bold my-4 text-black dark:text-white">
            {title}
          </h2>
          <p>
            {hashtags.map((hash, idx) => (
              <span key={idx}>
                <a href="">{hash} </a>
              </span>
            ))}
          </p>
          <div className="card-actions justify-start">
            <button
              onClick={() => handleMarkAsRead(reading_time)}
              className="text-xl text-[#6047EC] underline"
            >
              Mark As Read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleToAddBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};
export default Blog;
