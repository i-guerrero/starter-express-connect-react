import { useState, useEffect } from "react";
import Bookmark from "./Bookmark";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/bookmarks`)
      .then((response) => {
        setBookmarks(response.data);
      })
      .catch((e) => {
        console.error("catch", e);
      });
  }, []);

  return (
    <div className="Bookmarks">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this bookmark</th>
            </tr>
          </thead>
          <tbody>
            {bookmarks.map((bookmark, index) => {
              return <Bookmark key={index} bookmark={bookmark} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Bookmarks;
