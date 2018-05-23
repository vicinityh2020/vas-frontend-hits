import React, {PureComponent} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import LocationIcon from '@material-ui/icons/LocationOn';
import SwapVertIcon from '@material-ui/icons/SwapVert';

const styles = theme => ({
    root: theme.mixins.gutters({
        padding: '0 0 !important',
        borderRadius: 8,
        marginLeft: 16,
        marginRight: 16,
    }),

    outerContainer: {
        padding: '16px 0',
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 16,
        marginRight: 16,
        fontSize: 14,
    },

    flexItem: {
        flexGrow: 1,
        display: 'inline-flex',
    },

    locationIcon: {
        fill: '#6b6b6b',
        flexGrow: 0,
        display: 'inline-flex',
        marginRight: 32,
    },

    swapIcon: {
        fill: '#6b6b6b',
        display: 'inline-flex',
        textAlign: 'right',
    },

    tempPad: {
        padding: '10px 10px 10px 48px'
    }
});

class ResultTable extends PureComponent {

    state = {
        field: null,
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <div className={classes.outerContainer}>
                    <LocationIcon className={classes.locationIcon} color={'#4b4b4b'} />
                    <Typography color={'#4b4b4b'} className={classes.flexItem} variant="subheading" component="span">
                        Available Parking Spots
                    </Typography>
                    <SwapVertIcon className={classes.swapIcon} color={'#4b4b4b'} />
                </div>
                <Paper className={classes.root} elevation={4}>
                    <Typography className={classes.tempPad} component="p">
                        Parking Alternative #1
                    </Typography>
                    <Divider />
                    <Typography className={classes.tempPad} component="p">
                        Parking Alternative #2
                    </Typography>
                    <Divider />
                    <Typography className={classes.tempPad} component="p">
                        Parking Alternative #3
                    </Typography>
                    <Divider />
                    <Typography className={classes.tempPad} component="p">
                        Parking Alternative #4
                    </Typography>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(ResultTable);