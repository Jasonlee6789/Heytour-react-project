import React, { useEffect, useReducer } from "react";
import { Grid, Breadcrumb } from "semantic-ui-react";
import { useJobDelete, useJobList } from "./JobListAPI";
import JobListContent from "./JobListContent";
import { Link } from "react-router-dom";
import JobDetail from "./JobDetail";
import jobListReducer from "./JobListReducer";

function JobAdmin() {
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
      dispatch({ type: "JOB_SUCCESS", payload: jobListResponse.data });
    }

    if (jobDeleteResponse.data && !jobDeleteResponse.isError) {
      //setJobs(jobs.filter((job) => job.id !== jobDeleteResponse.data));
      dispatch({
        type: "JOB_SUCCESS",
        payload: state.jobs.filter((job) => job.id !== jobDeleteResponse.data),
      });
    }
  }, [jobListResponse, jobDeleteResponse]);

  function handleDelete(id) {
    setJobId(id);
  }

  function handleJobDetailEDIT(job) {
    dispatch({ type: "JOBDETAIL_EDIT", payload: job });
  }
  return (
    <div>
      <Breadcrumb>
        <Link to={"/home"}>
          {" "}
          <Breadcrumb.Section link>Home</Breadcrumb.Section>
        </Link>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>Admin</Breadcrumb.Section>
      </Breadcrumb>
      <Grid>
        {/* {jobListResponse.data &&
          jobListResponse.data.map((job, index) => { */}
        {/* {jobs && */}
        {state.jobs.map((job, index) => {
          return (
            <Link to={"/jobs/" + job.id}>
              <JobListContent
                key={job.id}
                //isLoading={jobListResponse.isLoading}
                job={job}
                deleteJob={handleDelete}
                // putJob={onPutjob}
              />
            </Link>
          );
        })}
      </Grid>
    </div>
  );
}

export default JobAdmin;
