import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-[#FFFFFF] dark:bg-base-100 p-5 my-5 text-black dark:text-white rounded shadow-md dark:shadow-gray-200">
      <h3 className="text-2xl">{title}</h3>
    </div>
  );
};
Bookmark.propTypes = {
  bookmark: PropTypes.object,
};
export default Bookmark;
