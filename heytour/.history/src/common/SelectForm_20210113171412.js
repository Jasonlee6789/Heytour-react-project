import React from "react";
import { Input, Segment } from "semantic-ui-react";
// import debounce from "lodash.debounce";

const SelectForm = () => {
  // useEffect(() => {
  //   emitChangeDebounced.cancel();
  // });

  return (
    <Segment basic textAlign="right">
      <Input
        action={{ color: "blue", content: "Search" }}
        icon="search"
        iconPosition="left"
        placeholder="Enter Industry to search "
        // onChange={this.handleChange}
      />
    </Segment>
  );
};

export default SelectForm;
