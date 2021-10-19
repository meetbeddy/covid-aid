import React from "react";

export default function Post(props) {
  const filterPost = props?.post?.filter((p) => {
    return p.id.trim() === props.patharray[3].trim();
  });

  return (
    <div className="col-7 col-sm-9">
      <div className="tab-content" id="vert-tabs-tabContent">
        <div className="tab-pane text-left fade show active">
          {filterPost?.length > 0 ? <h3>{props.blogTitle}</h3> : null}
          {filterPost && filterPost ? filterPost[0]?.post : null}
        </div>
      </div>
    </div>
  );
}
