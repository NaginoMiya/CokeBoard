import React from 'react';

//コンポーネント
import EditButton from './EditButton';

//markdown関係
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';//url貼ったりtable作れるようになるやつ
import breaks from 'remark-breaks';//mdでの改行をそのまま改行にしてくれるやつ


function MiniMemo(){
    const [markdown, setMarkdown] = React.useState('');

    return (
        <div>
            <EditButton setMarkdown={setMarkdown}  />

            <ReactMarkdown plugins={[gfm, breaks]} children={markdown} />
        </div>
    )
}
export default MiniMemo;