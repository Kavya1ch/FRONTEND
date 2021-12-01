import axios from "axios";
import React, { Component } from "react";

class FurnitureUpdate extends React.Component {
  state = {
    furniture: {
      furnitureName: "",
      furnitureModel: "",
      furnitureColor: "",
      price: "",
    },
  };
  componentDidMount() {
    axios
      .get(
        `http://localhost:8080/api/displayFurniture/getAllFurnitureDetails/furnitureId/${this.props.match.params.furnitureId}`
      )
      .then((res) => {
        console.log(res);
        this.setState({ furnitures: res.data });
      })
      .catch((err) => console.log(err));
  }
  handleChange = (event) => {
    const stu = { ...this.state.furniture };
    stu[event.target.name] = event.target.value;
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ furniture: stu });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Clicked");
    axios
      .put(
        `http://localhost:8080/api/displayFurniture/updateFurniture/${this.props.match.params.furnitureId}`,
        this.state.furniture
      )
      .then((res) => {
        this.props.history.push("/furniture");
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <h3 class="text-center">Update Furniture</h3>
        <form className="w-50 mx-auto border p-3" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              Furniture Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              name="furnitureName"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputContactNo" className="form-label">
              Furniture Model
            </label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              name="furnitureModel"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Furniture Color
            </label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              name="furnitureColor"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              aria-describedby="emailHelp"
              name="price"
              onChange={this.handleChange}
            />
          </div>

          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default FurnitureUpdate;