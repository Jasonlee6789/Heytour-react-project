let ipUrl = "http://127.0.0.1:44351/default/";

let servicePath = {
  getArticleList: ipUrl + "getJobsList", //  首页文章列表接口
  getArticleById: ipUrl + "getJobById/", // 文章详细页内容接口 ,需要接收参数
};
export default servicePath;
