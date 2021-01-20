import React, { useEffect, useState } from "react";
import { Grid, Breadcrumb, Pagination } from "semantic-ui-react";
import { useJobDelete, useJobList } from "./JobListAPI";
import JobListContent from "./JobListContent";
import SelectForm from "../common/SelectForm";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function JobList() {
  const [jobListResponse, setJobListFilter] = useJobList(null);
  const [jobDeleteResponse, setJobId] = useJobDelete();
  const pages = 3;
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

  const pageLen = Math.ceil(jobs.length / pages);

  function handleDelete(id) {
    setJobId(id);
  }

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
                // putJob={onPutjob}
              />
            );
          })}
      </Grid>
      <Pagination
        defaultActivePage={5}
        totalPages={pageLen}
        floated="right"
        onPageChange={() => {}}
      />
    </div>
  );
}
