export const YT_VIDEO_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=`;

export const YT_BY_ID =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const SUGGESTIONS = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=anything&key=gpt`;

export const YT_SUGGESTIONS =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// export const YT_VIDEO_URL =
//   "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=2&regionCode=IN&key=" +
//   REACT_APP_API_KEY;

// export const Search_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${inputValue}&key=${REACT_APP_API_KEY}`;

export const VIDEO_COMMENTS =`https://www.googleapis.com/youtube/v3/commentThreads?key=${process.env.REACT_APP_API_KEY}&videoId=&part=snippet`// provide video id 