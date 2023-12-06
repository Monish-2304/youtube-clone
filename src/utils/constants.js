export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY;

 // 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=1&key=' 
 
// constants.js

const BASE_API_URL = "https://youtube.googleapis.com/youtube/v3/videos?";
//&part=snippet&maxResults=25&regionCode=in&topicId=trending&type=video&videoCategoryId=1&key=
export const fetchVideosByCategory = async (category) => {
  try {
    let categoryParams = "";

    switch (category) {
      case "Home":
        categoryParams =
          "part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=";
        break;
      case "Trending":
        categoryParams =
          "part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=1&key=";
        break;
      case "Shopping":
        categoryParams =
          "part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=26&key=";
        break;
      case "News":
        categoryParams =
          "part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=25&key=";
        break;
      case "Music":
        categoryParams =
          "part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=10&key=";
        break;
      case "Gaming":
        categoryParams =
          "part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=20&key=";
          break;
      case "Entertainment":
        categoryParams =
          "part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=24&key=";
        break;
      case "Shorts":
        categoryParams =
          "part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=42&key=";
        break;
        case "Sports":
          categoryParams = 'part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=17&key=';
          break;
          case 'Learning':
        categoryParams = 'part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=28&key=';
        break;
      default:
        // Handle default case or additional categories
        break;
    }

    const apiUrl = `${BASE_API_URL}${categoryParams}`+process.env.REACT_APP_GOOGLE_API_KEY;

    const data = await fetch(apiUrl);
    return data;
  } catch (error) {
    console.error("Error fetching videos by category:", error);
    throw new Error("Failed to fetch videos.");
  }
};
