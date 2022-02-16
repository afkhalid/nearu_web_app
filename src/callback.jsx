import { Component } from "react";

export default class CallbackPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="centered">
                <div className="restart-app-header">Kindly restart the application to activate your subscription if already successed</div>
            </div>
        );
    }
    
}