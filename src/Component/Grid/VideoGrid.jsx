import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/Videos/VideoSlice";
import VideoGridItem from "./VideoGridItem";
import Loading from "../Ui/Loading";

const VideoGrid = () => {
  const dispatch = useDispatch();

  const { videos, isLoading, isError, error } = useSelector(
    state => state.videos
  );
  const { tags, search } = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(fetchVideos({ tags, search }));
  }, [dispatch, tags, search]);

  // decide what to render
  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && videos?.length === 0) {
    content = <div className="col-span-12">No Videos Found!</div>;
  }

  if (!isLoading && !isError && videos?.length > 0) {
    content = videos.map(video => (
      <VideoGridItem key={video.id} video={video} />
    ));
  }
  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {/* <!-- single video --> */}
          {content}
        </div>
      </section>
    </section>
  );
};

export default VideoGrid;
