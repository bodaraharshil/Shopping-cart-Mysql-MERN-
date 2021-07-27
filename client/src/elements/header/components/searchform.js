import React from "react";

const Searchform = () => {
  return (
    <div>
      <div style={{ marginTop: "12px", marginLeft: "300px", float: "left" }}>
        <div class="search-container">
          <form>
            <input
              type="text"
              placeholder="Search.."
              style={{ width: "150%", outline: "0" }}
              name="search"
            />
            <button
              type="submit"
              style={{
                position: "absolute",
                marginLeft: "220px",
                marginTop: "-25px",
              }}
            >
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Searchform;
