import React from 'react';

import EditButton from './MiniMemo'

import MiniMemo from './MiniMemo';

//test用です自由に削除してください
function Test(props) {
    const [count, setCount] = React.useState(0);

    return (
        <div className="test">
            <h2>{props.uid}</h2>
        </div>
    );
}

export default Test;
