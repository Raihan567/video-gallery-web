import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filter/filterSlice";
import RelatedVideoReducer from "../features/RelatedVideos/RelatedVideoSlice";
import TagReducer from "../features/Tags/TagSlice";
import VideoReducer from "../features/Video/VideoSlice";
import videosReducer from "../features/Videos/VideoSlice";

const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: TagReducer,
    video: VideoReducer,
    relatedVideos: RelatedVideoReducer,
    filter: filterReducer
  },
});

export default store;
