import { Component } from "react/cjs/react.production.min";

const styles = {
    title: {
        marginBottom: '30px'
    }
}

class Title extends Component {
    render() {
        return(
            <h1 style={styles.title}>Listado de Productos</h1>
        )
    }
}

export default Title