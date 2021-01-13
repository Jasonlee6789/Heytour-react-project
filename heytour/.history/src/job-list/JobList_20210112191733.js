import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
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
  }, [jobListResponse, jobDeleteResponse]);

  function handleDelete(id) {
    confirm({
      title: "Are you sure to delete this job?",
      content: "如果你点击OK,此项将永远被删除。",
    });
    setJobId(id);
  }

  return (
    <div>
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
    </div>
  );
}