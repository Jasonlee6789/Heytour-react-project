let ipUrl = "https://localhost:5001";

let servicePath = {
  getJobs: ipUrl + "/api/jobs/", //  首页jobs列表接口

  // getJobByTitle: ipUrl + "/api/jobs", // 工作详细页内容接口 ,需要接收参数
};
export default servicePath;
