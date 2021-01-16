import React from 'react';
import { withStyles, Button, Box } from '@material-ui/core/';

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText('#fffafa'),
        margin: '4px',
        backgroundColor: '#fffafa',
        width: '80%',
        '&:hover': {
            backgroundColor: '#cccccc',
        },
        '& > *': {
            textOverflow: "ellipsis",
        }
    },
  }))(Button);

function Memo(props){
    const M = props.Memo;

    const handler = React.useCallback(() => {
//        props.setCurrentMemo(M.CreatedDate);
        props.setCurrentMemo(M);
    });

    return (
        <Box component="div">
            {/*  {M.CreatedDate} : {M.MiniMemo_A} : MemoName= */}
            <ColorButton variant="contained" onClick={handler}> {M.MemoName} </ColorButton>
        </Box>
    );
}
export default Memo;