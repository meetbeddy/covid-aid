import React from "react";
import JsonData from "../../data/data.json";
import NavBar from "../../components/dashboard/navbar/NavBar";
import Contents from "./Contents";
import SecondaryNav from "./SecondaryNav";
import Post from "./Post";
import { withRouter } from "react-router";

function BlogMainPage(props) {
  const [blogPageData, setBlogPageData] = React.useState({});
  const [blogTitle, setBlogTitle] = React.useState("");

  React.useEffect(() => {
    setBlogPageData(JsonData);
  }, []);

  const patharray = window.location.pathname.split("/");
  const pathname = patharray[2];
  const pathid = patharray[3];

  let title;
  let id;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  let data = [];
  if (pathname === "public-advice") {
    title = "Public Advice";
    id = pathid;
    data = blogPageData?.BlogPosts?.publicAdvice;
  } else if (pathname === "health-workers") {
    title = "Health Workers";
    id = pathid;
    data = blogPageData?.BlogPosts?.healthWorkers;
  } else if (pathname === "travel-advice") {
    title = "Travel Advice";
    id = pathid;
    data = blogPageData?.BlogPosts?.travelAdvice;
  } else if (pathname === "technical-guidance") {
    title = "Technical Guidance";
    id = pathid;
    data = blogPageData?.BlogPosts?.technicalGuidance;
  }

  React.useEffect(() => {
    const currentPost = data?.find((d) => d.id === id);

    setBlogTitle(currentPost?.title);
  }, [data, id]);

  return (
    <>
      <NavBar />
      <SecondaryNav title={title} />
      <div className="row">
        <Contents id={id} pathname={pathname} post={data} {...props} />
        <Post patharray={patharray} post={data} blogTitle={blogTitle} />
      </div>
    </>
  );
}
export default withRouter(BlogMainPage);
