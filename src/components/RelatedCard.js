import { timeAgo } from "../Utils/helper";

const RelatedCard = ({ results }) => {
  console.log(results);
  return (
    <div className="overflow-x-auto ml-5">
      <div>
        {results.map((item) => (
          <div
            key={item.id.videoId}
            className=" w-48 m-2 p-1 shadow rounded-md cursor-pointer"
          >
            <div className="flex  ">
              <img
                src={item.snippet.thumbnails.medium.url}
                alt="thumbnail"
                className="w-48 rounded-md"
              />
              <ul className=" m-1  ">
                {/* <img src="" alt="" /> */}
                <li className="font-bold text-sm truncate w-52 ">
                  {item.snippet.title}
                </li>
                <li className="text font-light ">
                  {item.snippet.channelTitle}
                </li>
                <div className="flex text-xs ">
                  <li className=" font-extralight ">
                    {item.snippet.viewCount} views
                  </li>
                  <li className=" font-extralight ml-2 list-disc list-inside ">
                    {" "}
                    {timeAgo(item.snippet.publishedAt)}
                  </li>
                </div>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedCard;
