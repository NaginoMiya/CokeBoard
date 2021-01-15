import React from 'react';

import EditButton from './EditButton'

import MiniMemo from './MiniMemo';

//test用です自由に削除してください
function Test(props) {
    const [count, setCount] = React.useState(0);

    const Add = React.useCallback(() => {
        setCount(count + 1);
    });

    return (
        <div className="test">
            <h2>{props.uid}</h2>
        </div>
    );
}

export default Test;
