import { TextField as MuiTextField, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import useStyles from './styles'
export const TextField = props => {
    const { label, mutiline, value, handleChange, rows, name, type, placeholder, theme, helperText, endAdorment, error, onBlur, propStyle, labelColor } = props;
    const classes = useStyles()
    return (
        <>
            {label ? <Typography className={`${classes.label} ${classes[labelColor]}`}>{label}</Typography> : null}
            <MuiTextField
                onChange={handleChange}
                name={name}
                type={type}
                size='small'
                className={`${theme === 'dark' ? classes.darkField : classes.lightField} ${propStyle.root}`}
                value={value}
                placeholder={placeholder}
                helperText={helperText}
                formHelperTextProps={{ classes: { root: classes.helperText } }}
                variant='outlined'
                mutiline={mutiline}
                rows={rows}
                endAdorment={endAdorment}
                error={error}
                onBlur={onBlur}
                color={labelColor}
            />
        </>
    )
}
TextField.propTypes = {
    /**
     * The label to be rendered in the MuiTextField
     */
    label: PropTypes.string,
    /**
     * value to be rendered in the MuiTextField
     */
    value: PropTypes.string,
    /**
     * multiline to be rendered in the MuiTextField
     */
    multiline: PropTypes.bool,
    /**
     * 
     * rows to be rendered in the MuiTextField
     */
    rows: PropTypes.number,
    /**
     * name to be rendered in the MuiTextField
     */
    type: PropTypes.string,
    /**
     * type to be rendered in the MuiTextField
     */
    placeholder: PropTypes.string,
    /**
     * placeholder to be rendered in the MuiTextField
     */
    handleChange: PropTypes.func.isRequired,
    /**
     * handleChange to be rendered in the MuiTextField
     */
    onBlur: PropTypes.func,
    /**
     * onBlur to be rendered in the MuiTextField
     */
    theme: PropTypes.string,
    /**
     * theme to be rendered in the MuiTextField
     */
    helperText: PropTypes.string,
    endAdorment: PropTypes.node,
    error: PropTypes.string,
    propStyle: PropTypes.object,
    labelColor: PropTypes.string
}
TextField.defaultProps = {
    label: 'label',
    value: '',
    mutiline: '',
    placeholder: '',
    rows: '',
    name: '',
    handleChange: () => null,
    theme: 'light',
    propStyle: {},
    labelColor: ''
}