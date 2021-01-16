import React from 'react';

import firebase from '../Firebase';
import MenuBar from './Components/MenuBar';
import MiniMemoBundle from './Components/MiniMemoBundle';
import LogoutButton from './Components/LogoutButton';
import './MainPage.css';
import Grid from '@material-ui/core/Grid';
import PleaseSelectMemo from './Components/PleaseSelectMemo';

function MainPage(props) {
    /*
    ・左側のリスト -> 最初のロード、作成、削除 で更新
    ・各メモに入っている内容 -> 保存を押したとき、最初のロード で更新
    */

    const db = firebase.firestore();

    //左側に並んでるメモのリスト
    const [Memos, setMemos] = React.useState([]);

    //現在選んでるメモを管理するstate
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
                    tmp.push({MemoName : doc.id, CreatedDate : docData.CreatedDate, MiniMemos : docData.MiniMemos});
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
        <Grid container className="MainPage" spacing={0}>
            <Grid item  xs={2} className="MenuBar">
                {/*<div> Uid = <Test uid={props.uid} /> </div>*/}

                {/* 左側のメニューバー */}
                <div>{isLoading ? <div>Loading</div> :  <MenuBar uid={props.uid} Memos={Memos} setMemos={setMemos} CurrentMemo={CurrentMemo} setCurrentMemo={setCurrentMemo} />}</div>

                <LogoutButton setUid={props.setUid} />
            </Grid>
            <Grid item xs={10} className="MemoScreen" spacing={0}>
                <h1>{(CurrentMemo == null || Memos.length == 0) ? "xxx" : CurrentMemo.MemoName}</h1>
                {(CurrentMemo == null || Memos.length == 0) ? <PleaseSelectMemo /> : <MiniMemoBundle uid={props.uid} CurrentMemo={CurrentMemo} setCurrentMemo={setCurrentMemo} Memos={Memos} setMemos={setMemos} />}
            </Grid>
        </Grid>
    );
}

export default MainPage;
