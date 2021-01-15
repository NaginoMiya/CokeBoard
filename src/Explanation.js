import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Typography} from '@material-ui/core/';
import './Explanation.css';
import glasses from'./glasses.jpg';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing('auto'),
        height: theme.spacing('auto'),
      },
    },
}));
  
export default function SimplePaper() {
    const classes = useStyles();
  
    return (
      <div className={classes.root} width="75%">
        <Grid container spacing={2}>
            <Grid item xl={7}>
                <Paper elevation={10} className="paper-components">
                    <h3>みんなでドリンクでも飲みながら</h3>
                    <p>Coke Boardは1つの大きなジュースをみんなでシェアしながら楽しくアイデア出しするような場面を想像しながら作成されました。</p>
                    <p>議論が白熱してアイデアがあっちこっち行ってしまっても大丈夫。Coke Boardは1つにまとめてくれます。</p>
                </Paper>
            </Grid>
            <Grid item xl={5}>
                <img src={glasses} className="glasses" alt="glasses" />
            </Grid>
        </Grid>
      </div>
    );
}