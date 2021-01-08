import React, { useEffect } from "react";
import { Grid, Button, Divider, Segment } from "semantic-ui-react";
import { useJobList } from "./JobListAPI";
import JobListContent from "./JobListContent";
import SelectForm from "../common/SelectForm";
import AddJob from "./AddJob";

export default function JobList() {
  const [jobList, setJobListFilterer] = useJobList(null);
  useEffect(() => {
    console.log(jobList);
  }, [jobList]);
  return (
    <div>
      <Segment basic textAlign="center">
        <SelectForm />

        <Divider horizontal>Or</Divider>

        <Button
          color="teal"
          content="Post New Job"
          icon="add"
          labelPosition="left"
          onClick={() => {
            <AddJob />;
          }}
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
                // putJob={jobList.onPutjob}
              />
            );
          })}
      </Grid>
    </div>
  );
}
