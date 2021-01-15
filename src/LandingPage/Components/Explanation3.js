import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid} from '@material-ui/core/';
import './Explanation.css';
import imageIcon from './image.svg';

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
                    <Grid item xl={7}>
                        <Paper elevation={10} className="paper-components">
                            <h3 className="paper-title">作ったメモは一枚の画像やpdfに</h3>
                            <div class="paper-text">
                                <p>みんなで作ったメモは最終的に全員が見える場所に共有したくなることでしょう。</p>
                                <p>その際に一々サイトにアクセスし直したり、スクリーンショットを撮ったりすることは手間です。</p>
                                <p>Coke Boardでは作成されたメモを1枚の画像やpdfに出力しダウンロードすることができます。</p>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xl={5}>
                        <img src={imageIcon} className="image-icon" alt="Image-icon" />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}