import React from "react";

function TripSearch() {
  const searchSubmit = (event) => {
    event.preventDefault();
    alert("Searching " + event.searchInput);
  };

  return (
    <div>
      <h3>
        Search our database of places to travel to by typing in some key words
        below.
      </h3>
      <form class="main-form" onSubmit={searchSubmit}>
        <div class="form-group row justify-content-center">
          <input class="col-lg-10 form-control-lg"
            type="search"
            id="searchInput"
            placeholder="Search Here"
          />
          <button class="submit-button" type="submit">
            Search!
          </button>
        </div>

      </form>
    </div>
  );
}

export default TripSearch;
