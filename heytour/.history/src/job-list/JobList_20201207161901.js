import React from "react";
import { Card } from "semantic-ui-react";
import { useJobList } from "./JobListAPI";
import JobListContent from "./List";

export default function JobList() {
  const [jobList, setJobListFilterer] = useJobList(null);
  return (
    <Card.Group>
      {jobList.data &&
        jobList.data.map((job) => {
          <JobListContent
            key={job.id}
            isLoading={jobList.isLoading}
            job={job}
          />;
        })}
    </Card.Group>
  );
}
