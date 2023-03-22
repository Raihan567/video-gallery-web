import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import VideoDescription from "../Component/Description/VideoDescription";
import VideoPlayer from "../Component/Description/VideoPlayer";
import RelatedVideos from "../Component/RelatedVideos/RelatedVideos";
import Loading from "../Component/Ui/Loading";
import { fetchVideo } from "../features/Video/VideoSlice";

const Video = () => {
  const dispatch = useDispatch();
  const { videoId } = useParams();
  const { video, isLoading, isError, error } = useSelector(
    state => state.video
  );

  const { link, title, id, tags } = video;

  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);

  //  decide what to render;
  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && isError && !video?.id) {
    content = <div className="col-span012">No Videos Found!</div>;
  }
  if (!isLoading && !isError && video?.id) {
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          {/* <!-- video player --> */}
          <VideoPlayer title={title} link={link} />

          {/* <!-- video description --> */}
          <VideoDescription video={video} />
        </div>

        {/* <!-- related videos --> */}
        <RelatedVideos tags={tags} currentVideoId={id} />
      </div>
    );
  }

  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        {content}
      </div>
    </section>
  );
};

export default Video;
