import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
import ReadingTime from "../../ReadingTIme/ReadingTime";
const Bookmarks = ({ bookmarks, readingTimes }) => {
  return (
    <div className="md:w-1/3 bg-slate-100 dark:bg-[#2c2b2b0d] rounded-lg p-7 my-9 sticky top-0">
      <ReadingTime readingTimes={readingTimes}></ReadingTime>
      <h1 className="text-3xl text-center text-black dark:text-white">
        Bookmark blogs: {bookmarks.length}
      </h1>
      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTimes: PropTypes.number,
};
export default Bookmarks;
