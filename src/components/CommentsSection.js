import { useEffect, useState } from "react";
import { YT_BY_ID, API_KEY } from "../Utils/Constants";
const CommentsSection = ({ VideoId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/commentThreads?key=${API_KEY}&videoId=${VideoId}&part=snippet`
      );
      const data = await response.json();
      console.log(data);
      setComments(data.items);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id} className="m-1 p-1">
          {/* {console.log(comment.snippet?.topLevelComment?.snippet?.textDisplay)} */}
          <h1 className="font-semibold">
            {comment.snippet?.topLevelComment?.snippet.authorDisplayName}
          </h1>
          <ul className="text-sm w-96 ">
            <li>{comment.snippet?.topLevelComment?.snippet?.textDisplay}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CommentsSection;
