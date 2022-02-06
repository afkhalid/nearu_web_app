import { Component } from "react";
import { getParameterByName } from "./utils";

export default class ScanPage extends Component {
  constructor(props) {
    super(props);
    const code = getParameterByName("code", this.props);
    console.log(code);
  }
  render() {
    return <div>This is a placeholder</div>;
  }
}
