import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//Modal
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

//IconButton
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    //Modalのスタイルです.
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    //IconButtonsのスタイルです.
    root: {
        '& > *': {
        margin: theme.spacing(1),
        },
    },
}));

function EditButton(props) {
    //プレースホルダー
    const textareaRef_md = React.useRef(null);

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        //メモの内容(md)をセットする.
        props.setMarkdown(textareaRef_md.current.value);
        setOpen(false);
    };


    return (
        <div>
            {/*  Editボタンです. */}
            <div className={classes.root}>
                <IconButton aria-label="delete" onClick={handleOpen}>
                    Editボタン<DeleteIcon />
                </IconButton>
            </div>

            {/* Modalです. */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
                disableBackdropClick={true}
            >
                <Fade in={open}>
                <div className={classes.paper}>
                    <textarea ref={textareaRef_md}></textarea>
                    <button onClick={handleClose}> Close </button>
                </div>
                </Fade>
            </Modal>
        </div>
    );
}
export default EditButton;