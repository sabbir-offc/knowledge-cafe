import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3 bg-slate-100 dark:bg-[#1111110D] rounded-lg p-7 my-9">
      <h1 className="text-3xl text-center text-black dark:text-white">
        Bookmark blogs: {bookmarks.length}
      </h1>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
};
export default Bookmarks;
