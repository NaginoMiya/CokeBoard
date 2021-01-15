import React from 'react';

//test用です自由に削除してください
function Test(props) {
    const [count, setCount] = React.useState(0);

    const Add = React.useCallback(() => {
        setCount(count + 1);
    });

    return (
        <div className="test">
            <h1>Hello!</h1>
            <h2>{props.uid}</h2>
            <p> Count = {count} </p>
            <button onClick={Add}> Add </button>
        </div>
    );
}

export default Test;
