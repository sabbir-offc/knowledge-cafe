import PropTypes from "prop-types"; // ES6
const Blog = ({ blog }) => {
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,
    hashtags,
    reading_time,
  } = blog;
  console.log(blog);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={cover} alt={`cover picture of - ${title}`} />
        </figure>
        <div className="card-body">
          <div className="flex gap-4 items-center justify-between">
            <div className="flex gap-6 items-center">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img src={author_img} />
                </div>
              </div>{" "}
              <div>
                <h3 className="font-bold text-2xl text-black dark:text-white">
                  {author}
                </h3>
                <p>{posted_date}</p>
              </div>
            </div>
            <div>
              <p>{reading_time} minute read</p>
            </div>
          </div>

          <h2 className="card-title text-4xl font-bold my-4">{title}</h2>
          <p>
            {hashtags.map((hash, idx) => (
              <span key={idx}>
                <a href="">{hash} </a>
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
