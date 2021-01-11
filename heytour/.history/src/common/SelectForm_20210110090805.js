import React from "react";
import { Input, Segment } from "semantic-ui-react";
// import debounce from "lodash.debounce";

const SelectForm = () => {
  // emitChangeDebounced = debounce(this.emitChange, 250);

  // emitChange((value) => {
  //   this.props.onChange(value);
  // });

  // handleChange((e) => {
  //   this.emitChangeDebounced(e.target.value);
  // });

  // useEffect(() => {
  //   emitChangeDebounced.cancel();
  // });

  return (
    <Segment basic textAlign="center">
      <Input
        action={{ color: "blue", content: "Search" }}
        icon="search"
        iconPosition="left"
        placeholder="Enter Industry to search "
        // onChange={this.handleChange}
        size="large"
      />
    </Segment>
  );
};

// async getJobFilter(){
//先配置路由的动态传值，然后再接收值
// let id = this.ctx.params.id
//   let sql = 'SELECT job.id as id,' +
//     'job.title as title' +
//     'job.picture as picture' +
//    "FROM_UNIXTIME(job.postTime,'%Y-%m-%d %H:%i:%s' ) as ListTime,"+
//   'FROM job LEFT JOIN type ON job.job_id = job.Id'+
//'WHERE job.id='+id
//   const results = await this.app.mysql.query(sql)
//   this.ctx.body = {
//     data:results
//   }
// }

export default SelectForm;
