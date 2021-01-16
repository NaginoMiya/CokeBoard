import React from 'react';
import MiniMemo from './MiniMemo';
import Grid from '@material-ui/core/Grid';

function MiniMemoBundle(props){

    return (
        <Grid container spacing={0}>
            {/*<p>test = {props.CurrentMemo.MiniMemos[0]}</p>*/}
            <Grid container item xs={12} spacing={1}>
                <MiniMemo idx={0} uid={props.uid} Memos={props.Memos} setMemos={props.setMemos} CurrentMemo={props.CurrentMemo} setCurrentMemo={props.setCurrentMemo} />
                <MiniMemo idx={1} uid={props.uid} Memos={props.Memos} setMemos={props.setMemos} CurrentMemo={props.CurrentMemo} setCurrentMemo={props.setCurrentMemo} />
                <MiniMemo idx={2} uid={props.uid} Memos={props.Memos} setMemos={props.setMemos} CurrentMemo={props.CurrentMemo} setCurrentMemo={props.setCurrentMemo} />
                <MiniMemo idx={3} uid={props.uid} Memos={props.Memos} setMemos={props.setMemos} CurrentMemo={props.CurrentMemo} setCurrentMemo={props.setCurrentMemo} />
            </Grid>
            <Grid container item xs={12} spacing={1}>
                <MiniMemo idx={4} uid={props.uid} Memos={props.Memos} setMemos={props.setMemos} CurrentMemo={props.CurrentMemo} setCurrentMemo={props.setCurrentMemo} />
                <MiniMemo idx={5} uid={props.uid} Memos={props.Memos} setMemos={props.setMemos} CurrentMemo={props.CurrentMemo} setCurrentMemo={props.setCurrentMemo} />
                <MiniMemo idx={6} uid={props.uid} Memos={props.Memos} setMemos={props.setMemos} CurrentMemo={props.CurrentMemo} setCurrentMemo={props.setCurrentMemo} />
                <MiniMemo idx={7} uid={props.uid} Memos={props.Memos} setMemos={props.setMemos} CurrentMemo={props.CurrentMemo} setCurrentMemo={props.setCurrentMemo} />
            </Grid>
        </Grid>
    );
}
export default MiniMemoBundle;