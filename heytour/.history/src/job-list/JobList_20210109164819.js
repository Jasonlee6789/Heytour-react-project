import React, { useEffect, useState } from "react";
import { Grid, Button, Divider, Segment } from "semantic-ui-react";
import { useJobDelete, useJobList } from "./JobListAPI";
import JobListContent from "./JobListContent";
import SelectForm from "../common/SelectForm";

export default function JobList() {
  const [jobListResponse, setJobListFilter] = useJobList(null);
  const [jobDeleteResponse, setJobId] = useJobDelete();

  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    console.log(jobListResponse);

    if (jobListResponse.data && !jobListResponse.isError) {
      setJobs(jobListResponse.data);
    }

    if (jobDeleteResponse.data && !jobDeleteResponse.isError) {
      setJobs(jobs.filter((job) => job.id !== jobDeleteResponse.data));
    }
    console.log(jobs);
  }, [jobListResponse, jobDeleteResponse]);

  function handleDelete(id) {
    setJobId(id);
  }

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
            console.log("点击了添加新工作");
          }}
        />
      </Segment>

      <Grid>
        {/* {jobListResponse.data &&
          jobListResponse.data.map((job, index) => { */}
        {jobs &&
          jobs.map((job, index) => {
            return (
              <JobListContent
                key={job.id}
                //isLoading={jobListResponse.isLoading}
                job={job}
                deleteJob={handleDelete}
                // putJob={onPutjob}
              />
            );
          })}
      </Grid>
    </div>
  );
}
