import React, { useState } from "react";
import "../static/css/AddJob.css";

function AddJob() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Title" value={e.target.value} />
        <textarea placeholder="Enter Body" value={e.target.value}></textarea>
        <input type="submit" value="Add/Update Post" />
      </form>
    </div>
  );
}
export default AddJob;
