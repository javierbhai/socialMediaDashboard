import { withStyles } from "@material-ui/core/styles";
import Switch from '@material-ui/core/Switch';

const CustomeSwitch = withStyles((theme) => ({
    root: {
        width: 44,
        height: 24,
        padding: 0
    },
    thumb: {
        width: 20,
        height: 20
    },
    switchBase: {
        padding: 2,
        color: 'hsl(228, 28%, 20%)',
        border: "none",
    "&$checked": {
        transform: "translateX(19px)",
        color: 'hsl(0, 0%, 100%)',
        "& + $track": {
            background: 'hsl(230, 22%, 74%)',
            opacity: 1,
            border: "none"
        }
    }
    },
    track: {
        borderRadius: 50,
        background: `linear-gradient(90deg, rgba(55,143,230,1) 0%, rgba(62,218,130,1) 100%)`,
        opacity: 1,
        transition: theme.transitions.create(["background-color"])
    },
    checked: {},
    focusVisible: {}
    }))(({ classes, ...props }) => {
    return (
    <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked
        }}
        {...props}
    />
    );
});

export default CustomeSwitch;
