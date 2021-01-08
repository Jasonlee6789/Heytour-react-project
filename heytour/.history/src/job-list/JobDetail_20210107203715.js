import React, { useEffect, useState } from "react";

function JobDetail(props) {
  const [jobId, setJobId] = useState(null);
  useEffect(() => {
    let tempId = props.match.params.id;
  });
  return <div>Every Job Details.</div>;
}

export default JobDetail;
