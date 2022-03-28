import React, { Component } from "react";
import img1 from "../desktop_img_1.jpg";
import data from "./Data";

class List extends Component {
  render() {
    return (
      <div class="card bg-dark text-white w-25 text-center ">
        <img src={img1} class="card-img" alt="..." />
        <div class="card-img-overlay">
          <h5 class="card-title">{data[0].name}</h5>
          <p class="card-text">This is just a sample Image</p>
          <p class="card-text">Auli</p>
        </div>
      </div>
    );
  }
}
export default List;
