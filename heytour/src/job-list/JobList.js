import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { useJobList } from "./JobListAPI";
import JobListContent from "./JobListContent";

export default function JobList() {
  const [jobList, setJobListFilterer] = useJobList(null);
  useEffect(() => {
    console.log(jobList);
  }, [jobList]);
  return (
    <Grid>
      {jobList.data &&
        jobList.data.map((job) => {
          return (
            <JobListContent
              key={job.id}
              isLoading={jobList.isLoading}
              job={job}
            />
          );
        })}
    </Grid>
  );
}
