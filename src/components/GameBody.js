import React from 'react';

const styles = {
    image: {
        height: '140px',
        width: '140px',
        background: 'black',
        margin: '5px'
    },
    cage: {
        height: '150px',
        width: '150px',
        background: 'lavender',
        float: 'left'
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