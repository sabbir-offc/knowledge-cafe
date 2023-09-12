import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleToAddBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  const [readingTimes, setReadingTimes] = useState(0);
  const handleMarkAsRead = (time) => {
    const newReadingTimes = readingTimes + time;
    setReadingTimes(newReadingTimes);
  };

  return (
    <div className="container mx-auto py-4">
      <Header></Header>
      <div className="md:flex gap-6">
        <Blogs
          handleToAddBookmark={handleToAddBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>

        <Bookmarks
          bookmarks={bookmarks}
          readingTimes={readingTimes}
        ></Bookmarks>
      </div>
    </div>
  );
}

export default App;
