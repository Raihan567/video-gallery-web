import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../features/RelatedVideos/RelatedVideoSlice";
import Loading from "../Ui/Loading";
import RelatedVideosItem from "./RelatedVideosItem";

const RelatedVideos = ({ tags, currentVideoId }) => {
  const dispatch = useDispatch();
  const { relatedVideos, isLoading, isError, error } = useSelector(
    state => state.relatedVideos
  );
  // it takes 2 parameters [tags, id]
  useEffect(() => {
    dispatch(fetchRelatedVideos({ tags, id: currentVideoId }));
  }, [dispatch, tags, currentVideoId]);

  // decide what to render
  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && isError && relatedVideos?.length === 0) {
    content = <div className="col-span012">No Related Videos Found!</div>;
  }
  if (!isLoading && !isError && relatedVideos?.length > 0) {
    content = relatedVideos.map(video => (
      <RelatedVideosItem key={video.id} video={video} />
    ));
  }
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {/* <!-- single related video --> */}
      {content}
    </div>
  );
};

export default RelatedVideos;
