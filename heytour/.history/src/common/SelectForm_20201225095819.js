import React from "react";
import { Input } from "semantic-ui-react";

const SelectForm = () => {

  handleChange(e){
    this.emitChangeDebounces(e.target.value);
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
