import React from "react";
import { Input } from "semantic-ui-react";
import debounce from "lodash.debounce";

const SelectForm = () => {
  emitChangeDebounced = debounce(this.emitChange, 250);

  emitChange((value) => {
    this.props.onChange(value);
  });

  handleChange((e) => {
    this.emitChangeDebounced(e.target.value);
  });

  useEffect(() => {
    emitChangeDebounced.cancel();
  });
  
  return (
    <Input
      action={{ color: "blue", content: "Search" }}
      icon="search"
      iconPosition="left"
      placeholder="FilterTerm #"
      onChange={this.handleChange}
    />
  );
};

async getJobFilter(){
  let sql = 'SELECT job.id as id,' +
    'job.title as title' +
    'job.picture as picture' +
  'FROM job LEFT JOIN type ON article.type_id = type.Id'
  const results = await this.app.mysql.query(sql)
  this.ctx.body = {
    data:results
  }
}

export default SelectForm;
