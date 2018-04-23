import React from 'react';

const styles = {
    image: {
        height: '140px',
        width: '140px',
        margin: '5px'
    },
    cage: {
        height: '150px',
        width: '150px',
        background: 'lavender',
        float: 'left',
        margin: '28px',
        border: '1px solid black',
        boxShadow: '5px 10px 15px gray'
    }
}
const GameBody = props => (
    <div>
        <div style={styles.cage}>
            <img style={styles.image} src={props.image} alt={props.teamname} />
        </div>
    </div>
)

export default GameBody;