import PropTypes from "prop-types";

const ReadingTime = ({ readingTimes }) => {
  return (
    <div className="mb-6 border border-[#6047EC] rounded-lg px-12 py-5 place-items-center text-center bg-[#6047EC1A]">
      <h2 className="text-[#6047EC] text-center text-2xl font-bold">
        Spent time on read : <span>{readingTimes}</span> Minute
      </h2>
    </div>
  );
};

ReadingTime.propTypes = {
  readingTimes: PropTypes.number,
};

export default ReadingTime;
