import React from 'react';

const styles = {
    footer: {
        background: "black",
        borderTop: "1px solid white",
        padding: "30px",
        clear: "both"
    }
    
}
const Footer = () => (
    <div className="text-center text-white" style={styles.footer}>
        <h2>NBA Memory Game</h2>
    </div>
)

export default Footer