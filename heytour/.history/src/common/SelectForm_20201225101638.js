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

export default SelectForm;
