import React from "react";
import { Input } from "semantic-ui-react";
import debounce from "lodash.debounce";

handleChange(e){
  this.emitChangeDebounced(e.target.value);
}

const SelectForm = () => {
  this.emitChangeDebounced = debounce(this.emitChange, 250);

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
