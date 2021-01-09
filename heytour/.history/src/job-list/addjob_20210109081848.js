import React from "react";
function AddJob() {
    return <div>Todo Post New Job !
           <form>
          <input type='text' placeholder='Title' value={this.state.title} />
          <textarea placeholder='Enter Body' value={this.state.body}>
          </textarea>
          <input type='submit' value='Add/Update Post'/>

  </div>;
}
export default AddJob;
