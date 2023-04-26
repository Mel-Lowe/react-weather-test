import React from "react";

export default function Form() {
  return (
    <form id="city-search-form">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city ..."
            className="form-control"
            id="city-input"
            autocomplete="off"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-outline-success w-100"
          />
        </div>
      </div>
    </form>
  );
}
