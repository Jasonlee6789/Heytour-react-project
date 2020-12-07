import React from "react";
import { Grid } from "semantic-ui-react";
import { useJobList } from "./JobListAPI";
import JobListContent from "./JobListContent";

export default function JobList() {
  const [jobList, setJobListFilterer] = useJobList(null);
  return (
    <Grid>
      {jobList.data &&
        jobList.data.map((job) => {
          <JobListContent
            key={job.id}
            isLoading={jobList.isLoading}
            job={job}
          />;
        })}
    </Grid>
  );
}
