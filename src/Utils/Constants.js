export const API_KEY = "AIzaSyA-lOT8v_jRIQOOk7sO_E4JJV3MVcdJAso"; // make env while deployment

export const YT_VIDEO_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=3&regionCode=IN&key=${API_KEY}`;

export const YT_BY_ID =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const SUGGESTIONS = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=anything&key=${API_KEY}`;

export const YT_SUGGESTIONS =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// export const YT_VIDEO_URL =
//   "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=2&regionCode=IN&key=" +
//   API_KEY;

// export const Search_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${inputValue}&key=${API_KEY}`;