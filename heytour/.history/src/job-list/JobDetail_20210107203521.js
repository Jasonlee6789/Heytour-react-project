import React, { useEffect } from "react";

function JobDetail(props) {
  useEffect(() => {
    let tempId = props.match.params.id;
  });
  return <div>Every Job Details.</div>;
}

export default JobDetail;
