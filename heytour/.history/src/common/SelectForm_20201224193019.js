import React from "react";
import { Input } from "semantic-ui-react";

const SelectForm = () => {
  return (
    <form>
      // <input type="text" name="filterTerm" />
      <Input
        action={{ color: "blue", content: "Search" }}
        icon="search"
        iconPosition="left"
        placeholder="filterTerm#"
      />
    </form>
  );
};

export default SelectForm;
