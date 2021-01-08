import React from "react";
import { Input } from "semantic-ui-react";

const SelectForm = () => {
  return (
    <Input
      action={{ color: "blue", content: "Search" }}
      icon="search"
      iconPosition="left"
      placeholder="filterTerm#"
    />
  );
};

export default SelectForm;
