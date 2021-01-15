import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid} from '@material-ui/core/';
import './Explanation.css';
import mdicon from './markdown.svg';

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
        <div class="explan-box">
            <div className={classes.root} width="75%">
                <Grid container spacing={2}>
                    <Grid item xl={5}>
                        <img src={mdicon} className="md-icon" alt="Markdown-icon" />
                    </Grid>
                    <Grid item xl={7}>
                        <Paper elevation={10} className="paper-components">
                            <h3 className="paper-title">嬉しいMarkdown対応</h3>
                            <div class="paper-text">
                                <p>たかがメモといっても見やすさは大切です。</p>
                                <p>Coke BoardではMarkdown入力に対応しており、メモを見やすく飾ってくれます。</p>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}