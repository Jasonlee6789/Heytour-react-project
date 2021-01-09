import React, { useEffect, useState } from "react";
import { Grid, Button, Divider, Segment } from "semantic-ui-react";
import { useJobDelete, useJobList } from "./JobListAPI";
import JobListContent from "./JobListContent";
import SelectForm from "../common/SelectForm";

export default function JobList() {
  const [jobList, setJobListFilterer] = useJobList(null);
  const [jobDeleteResponse, setJobId] = useJobDelete();

  useEffect(() => {
    console.log(jobList);
  }, [jobList]);

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
        {jobList.data &&
          jobList.data.map((job, index) => {
            return (
              <JobListContent
                key={job.id}
                isLoading={jobList.isLoading}
                job={job}
                deleteJob={handleDelete}
                // putJob={jobList.onPutjob}
              />
            );
          })}
      </Grid>
    </div>
  );
}
