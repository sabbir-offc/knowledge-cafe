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
  const handleMarkAsRead = (time, id) => {
    const newReadingTimes = readingTimes + time;
    setReadingTimes(newReadingTimes);

    // remove items
    const remainingBlogs = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(remainingBlogs);
  };

  return (
    <div className="container mx-auto py-4">
      <Header></Header>
      <div className="md:flex gap-6 relative">
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
