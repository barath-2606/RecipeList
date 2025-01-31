import { Box, Dialog, DialogTitle, IconButton, DialogContent, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
// import { useDispatch } from "react-redux";

// import { useSelector } from 'react-redux'
// import { setDialogOpen } from "../../slice/CreateSlice";

const DialogComp = ({open}) => {

    return (
        <Box>
            <Dialog open={open}>
                <DialogTitle>Title Of the Dialog</DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={()=>{ open = !open}}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </Typography>
                    <Typography gutterBottom>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </Typography>
                    <Typography gutterBottom>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
                        magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                        ullamcorper nulla non metus auctor fringilla.
                    </Typography>
                </DialogContent>
            </Dialog>
        </Box>
    )
}

DialogComp.propTypes = {
    open:PropTypes.bool
}

export default DialogComp
