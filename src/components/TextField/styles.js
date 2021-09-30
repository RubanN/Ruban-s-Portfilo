import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    label: {
        fontSize: '14px',
        lineHeight: '17px',
        display: 'flex',
        alignItems: 'center',
        height: '30px',
        fontWeight: 400
    },
    error: {
        color: theme.palette.error.main,
        lineHeight: '17px',
        fontWeight: 400,
        height: '30px'
    },
    success: {
        color: theme.palette.success.main,
        lineHeight: '17px',
        fontWeight: 400,
        height: '30px'
    },
    white: {
        color: theme.palette.common.white
    },
    helperText: {
        marginLeft: '0px',
        fontSize: '10px'
    },
    darkField: {
        '& .MuiInputBase-input': {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.secondary.main
        },
        '& .MuiOutlinedInput-multiline': {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.secondary.main
        }
    },
    lightField: {
        '& .MuiInputBase-input': {
            color: theme.palette.common.black,
            backgroundColor: theme.palette.common.white
        },
        '& .MuiOutlinedInput-multiline': {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.secondary.main,
            fontWeight: 600,
            fontSize: '16px'
        }
    }
}))
export default useStyles
