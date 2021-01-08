import React, { useEffect } from "react";
import { Grid, Button, Divider, Input, Segment } from "semantic-ui-react";
import { useJobList } from "./JobListAPI";
import JobListContent from "./JobListContent";

export default function JobList() {
  const [jobList, setJobListFilterer] = useJobList(null);
  useEffect(() => {
    console.log(jobList);
  }, [jobList]);
  return (
    <div>
      <Segment basic textAlign="center">
        <Input
          action={{ color: "blue", content: "Search" }}
          icon="search"
          iconPosition="left"
          placeholder="Title #"
        />

        <Divider horizontal>Or</Divider>

        <Button
          color="teal"
          content="Post New Job"
          icon="add"
          labelPosition="left"
        />
      </Segment>

      <Grid>
        {jobList.data &&
          jobList.data.map((job) => {
            return (
              <JobListContent
                key={job.id}
                isLoading={jobList.isLoading}
                job={job}
                deleteJob={jobList.onDeleteJob}
                putJob={joblist.onPutjob}
              />
            );
          })}
      </Grid>
    </div>
  );
}
