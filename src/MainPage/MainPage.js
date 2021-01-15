import React from 'react';
import Test from './Components/Test'

import firebase, {db} from '../Firebase';
import MiniMemo from './Components/MiniMemo';
import Memo from './Components/Memo';
import MenuBar from './Components/MenuBar';

function MainPage(props) {
    /*
    ・左側のリスト -> 最初のロード、作成、削除 で更新
    ・各メモに入っている内容 -> 保存を押したとき、最初のロード で更新
    */

    const db = firebase.firestore();

    //左側に並んでるメモのリスト
    const [Memos, setMemos] = React.useState([]);

    //現在選んでるメモが作成された時間を管理するstate
    const [CurrentMemo, setCurrentMemo] = React.useState(null);

    // Loadingを判定する変数
    const [isLoading, setIsLoading] = React.useState(true);

    //一番最初にfirestoreからデータを取ってきてstateに入れる
    React.useEffect(() => {
        (async () => {
            const docRef = await db.collection(props.uid);
            
            let tmp = [];

            let allDocumentList = await docRef.get().then(snapshot => {
                snapshot.forEach(doc => {
                    const docData = doc.data();
                    tmp.push({MemoName : doc.id, CreatedDate : docData.CreatedDate, MiniMemo_A : docData.MiniMemo_A});
                });
            }).catch(err => {
                console.log('Error getting documents', err);
            });

            setMemos(tmp);

            // Loading終了
            setIsLoading(false);
        })()
    }, [db])



    return (
        <div className="MainPage">
            <div> Uid = <Test uid={props.uid} /> </div>

            <div>
                <h2>Markdown = </h2>
                {isLoading ? <div>Loading</div> : <MiniMemo Markdown={Memos} />}
                <h2> -------- </h2>
            </div>
            
            <div>CurrentMemo = {CurrentMemo}</div>
            {/* 左側のメニューバー */}
            <div>{isLoading ? <div>Loading</div> :  <MenuBar uid={props.uid} Memos={Memos} setMemos={setMemos} CurrentMemo={CurrentMemo} setCurrentMemo={setCurrentMemo} />}</div>
        </div>
    );
}

export default MainPage;
