import React, { PureComponent } from 'react';
import MomentJs from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import TimePicker from 'material-ui-pickers/TimePicker';
import moment from 'moment';
import EventIcon from '@material-ui/icons/Event';

import {withStyles} from '@material-ui/core/styles';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        margin: '0 18px',
        padding: '18px 0',
        alignItems: 'center',
    },
    icon: {
        color: '#ffffff',
        flexGrow: 1,
        verticalAlign: 'middle',
        position: 'relative',
        paddingRight: 5,
    },

    timeSelector: {
        flexGrow: 2,
        padding: '0 5px',
    },
};

class DTPicker extends PureComponent {
    state = {
        selectedDate: new Date(),
    };

    handleDateChange = (date) => {
        this.setState({ selectedDate: date });
    };

    render() {
        const { selectedDate } = this.state;
        const { classes } = this.props;

        return (
            <div className={classes.container}>
                <MuiPickersUtilsProvider
                    utils={MomentJs}
                    moment={moment}
                    locale={'us'}>
                    <EventIcon className={classes.icon}/>
                    <TimePicker className={classes.timeSelector}
                        value={selectedDate}
                        onChange={this.handleDateChange}
                    />

                    <TimePicker className={classes.timeSelector}
                        value={selectedDate}
                        onChange={this.handleDateChange}
                    />

                </MuiPickersUtilsProvider>
            </div>
        );
    }
}

export default withStyles(styles)(DTPicker);