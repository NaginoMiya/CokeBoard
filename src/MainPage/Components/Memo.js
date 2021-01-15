import React from 'react';

function Memo(props){
    const handler = React.useCallback(() => {
        props.setCurrentMemo(props.CreatedDate);
    });

    return (
        <div className="contents">
            <button onClick={handler}> {props.CreatedDate} : {props.MiniMemo_A} : MemoName={props.MemoName} </button>
        </div>
    );
}
export default Memo;