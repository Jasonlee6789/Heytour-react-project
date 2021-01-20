let ipUrl = "http://localhost:5001";

let servicePath = {
  getJobsList: ipUrl + "getJobsList", //  首页jobs列表接口
  getJobById: ipUrl + "getJobById/", // 工作详细页内容接口 ,需要接收参数
};
export default servicePath;
