import React, { useEffect, uesState, useReducer } from "react";
import { Grid, Breadcrumb, Pagination } from "semantic-ui-react";
import { useJobDelete, useJobList } from "./JobListAPI";

import JobListContent from "./JobListContent";
import JobDetail from "./JobDetail";
import jobListReducer from "./JobListReducer";

export default function JobList() {
  const [jobListResponse, setJobListFilter] = useJobList(null);
  const [jobDeleteResponse, setJobId] = useJobDelete();

  //const [jobs, setJobs] = useState(null);

  const [state, dispatch] = useReducer(jobListReducer, {
    jobs: [],
    jobSelected: {},
    isError: false,
    isLoading: false,
    isCreate: false,
  });

  useEffect(() => {
    console.log(jobListResponse);
    if (jobListResponse.data && !jobListResponse.isError) {
      // setJobs(jobListResponse.data);
      dispatch({ type: "JOBLIST_SUCCESS", payload: jobListResponse.data });
    }

    if (jobDeleteResponse.data && !jobDeleteResponse.isError) {
      //setJobs(jobs.filter((job) => job.id !== jobDeleteResponse.data));
      dispatch({
        type: "JOBLIST_SUCCESS",
        payload: state.jobs.filter((job) => job.id !== jobDeleteResponse.data),
      });
    }
  }, [jobListResponse, jobDeleteResponse]);
  //const pages = 3;
  // let pageLen = Math.ceil(jobs.length / pages);

  function handleDelete(id) {
    setJobId(id);
  }

  function handleJobDetailEDIT(job) {
    dispatch({ type: "JOBDETAIL_EDIT", payload: job });
  }

  function handleJobDetailClose() {
    dispatch({ type: "JOBDETAIL_CLOSE" });
  }

  function handleSave(job) {
    var jobs = state.jobs.filter((j) => j.id !== job.id);
    jobs.unshift(job);
    dispatch({ type: "JOBDETAIL_SAVE", payload: jobs });
  }

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Section link>Home</Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>Jobs</Breadcrumb.Section>
      </Breadcrumb>
      {/* {state.isLoading ? (
        <h1>isLoading...</h1>
      ) : ( */}
      <Grid>
        {/* {jobListResponse.data &&
     jobListResponse.data.map((job, index) => { */}
        {/* {jobs && */}
        {state.jobs.map((job) => {
          return (
            <JobListContent
              key={job.id}
              //isLoading={jobListResponse.isLoading}
              job={job}
              deleteJob={handleDelete}
              onEdit={handleJobDetailEDIT}
            />
          );
        })}
      </Grid>
      {/* )} */}

      {state.jobDetailOpen && (
        <JobDetail
          isCreate={state.isCreate}
          open={state.jobDetailOpen}
          onClose={handleJobDetailClose}
          onSave={handleSave}
          jobSelected={state.jobSelected}
        />
      )}

      <Pagination
        defaultActivePage={5}
        totalPages={10}
        floated="right"
        onPageChange={() => {
          console.log("翻页");
        }}
      />
    </div>
  );
}
