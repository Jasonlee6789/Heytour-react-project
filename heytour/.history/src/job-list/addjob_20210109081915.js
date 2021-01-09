import React from "react";
function AddJob() {
    return (>
           <form>
          <input type='text' placeholder='Title' value={this.state.title} />
          <textarea placeholder='Enter Body' value={this.state.body}>
          </textarea>
          <input type='submit' value='Add/Update Post'/>
);
}
export default AddJob;
