import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid, Container} from '@material-ui/core/';
import './Explanation.css';
import mdicon from './markdown.svg';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'inline-block',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(6),
      },
    },
}));
  
export default function SimplePaper() {
    const classes = useStyles();
  
    return (
        <Container maxWidth="xl">
            <div className={classes.root}>
                <Grid container spacing={2} justify="center">
                    <Grid item xl={5}>
                        <Container>
                            <img src={mdicon} className="md-icon" alt="Markdown-icon" />
                        </Container>
                    </Grid>
                    <Grid item xl={7}>
                        <Container width="100%">
                            <Paper elevation={10} className="paper-components" >
                                <h3 className="paper-title">嬉しいMarkdown対応</h3>
                                <div class="paper-text">
                                    <p>たかがメモといっても見やすさは大切です。</p>
                                    <p>Coke BoardではMarkdown入力に対応しており、メモを見やすく飾ってくれます。</p>
                                </div>
                            </Paper>
                        </Container>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}