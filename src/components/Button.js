import { Component } from "react/cjs/react.production.min";

const styles = {
    button: {
        backgroundColor: '#0a283e',
        color: '#fff',
        border: 'none',
        padding: '15px 20px',
        borderRadius: '6px',
        cursor: 'pointer'
    }
}

class Button extends Component {

    render(){
        return (
            <button style={styles.button} {...this.props}></button>
        )
    }
}

export default Button