import React from "react";
import { Input } from "semantic-ui-react";
import debounce from "lodash.debounce";

const SelectForm = () => {

  handleChange(e){
    this.emitChangeDebounced(e.target.value);
  }

  return (
    <Input
      action={{ color: "blue", content: "Search" }}
      icon="search"
      iconPosition="left"
      placeholder="FilterTerm #"
    />
  );
};

export default SelectForm;
