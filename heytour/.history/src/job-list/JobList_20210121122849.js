import React, { useEffect, useState, useReducer } from "react";
import { Grid, Breadcrumb, Pagination } from "semantic-ui-react";
import { useJobDelete, useJobList } from "./JobListAPI";
import JobListContent from "./JobListContent";
import SelectForm from "../common/SelectForm";
import JobDetail from "./JobDetail";
import jobListReducer from "./JobListReducer";

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
  }, [jobListResponse, jobDeleteResponse]);
  //const pages = 3;
  // let pageLen = Math.ceil(jobs.length / pages);

  function handleDelete(id) {
    setJobId(id);
  }

  function handleJobDetailEDIT(job) {}

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Section link>Home</Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>Jobs</Breadcrumb.Section>
      </Breadcrumb>
      <SelectForm />
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
                onEdit={handleJobDetailEDIT}
                // putJob={onPutjob}
              />
            );
          })}
      </Grid>
      <Pagination
        defaultActivePage={5}
        totalPages={10}
        floated="right"
        onPageChange={(data) => {
          console.log(data);
        }}
      />
    </div>
  );
}
