export const API_KEY = "AIzaSyCa3myl_r_kHi6EeY02jPVSIhiVh-JBSVw"; // make env while deployment

export const YT_VIDEO_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=IN&key=" +
  API_KEY;
export const YT_BY_ID =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const SUGGESTIONS = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=anything&key=AIzaSyCa3myl_r_kHi6EeY02jPVSIhiVh-JBSVw`;

// export const Search_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${inputValue}&key=${API_KEY}`;
