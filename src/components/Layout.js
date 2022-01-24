import { Component } from "react/cjs/react.production.min";

const styles = {
    layout: {
        backgroundColor: '#fff',
        color: '#0a283e',
        alingItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    container: {
        width: '1200px', 
        margin: '0px auto'
    }
}

class Layout extends Component {
    render() {
        return (
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout