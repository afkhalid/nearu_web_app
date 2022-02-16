import { Component } from "react";
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    baseText: {
      fontWeight: 'bold'
    },
  });
export default class CallbackPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Text style={styles.baseText}>
                Kindly restart the application to activate you subscription if payment successed.
            </Text>
        );
    }
    
}