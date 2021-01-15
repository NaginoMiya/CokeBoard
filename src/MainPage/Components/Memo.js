import React from 'react';

function Memo(props){
    const M = props.Memo;

    const handler = React.useCallback(() => {
//        props.setCurrentMemo(M.CreatedDate);
        props.setCurrentMemo(M);
    });

    return (
        <div className="contents">
            <button onClick={handler}> {M.CreatedDate} : {M.MiniMemo_A} : MemoName={M.MemoName} </button>
        </div>
    );
}
export default Memo;