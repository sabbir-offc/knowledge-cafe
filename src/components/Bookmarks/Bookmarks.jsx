import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3">
      <h1 className="text-3xl">Bookmark blogs: {bookmarks.length}</h1>
      {bookmarks.map}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.object,
};
export default Bookmarks;
