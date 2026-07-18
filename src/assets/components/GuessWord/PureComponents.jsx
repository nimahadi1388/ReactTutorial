import { createRef, PureComponent } from "react";
class PureCompo extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: "",
    };
    this.counter = 0;
    // our correct ✅ way for geting value Start
    this.myInput = createRef(); //first step for geting value
  }
  handleChange = () => {
    this.setState({
      //   name: document.getElementById("myInput").value, // this way for geting value is mistak ❌ our corret way is on top
      name: this.myInput.current.value, //third step for geting value
      // our correct geting value End
    });
  };
  componentDidMount() {
    this.myInput.current.focus();
  }
  render() {
    return (
      <>
        <h3>Guess Word</h3>
        <input
          ref={this.myInput} // second step for geting value
          autoComplete="off"
          className="form-control"
          type="text"
          placeholder="Please enter your word..."
        />
        <button
          className="btn btn-success mt-4 px-3"
          onClick={this.handleChange}
        >
          Submit
        </button>
        <button
          className="btn btn-secondary mt-4 px-3 ms-3"
          onClick={() => (this.myInput.current.value = "")} // fourth step for geting value
        >
          Hide
        </button>
        <br />
        <br />
        <span>{this.counter++}</span>
      </>
    );
  }
}
export default PureCompo;
