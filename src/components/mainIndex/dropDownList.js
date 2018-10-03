import React, {Fragment} from 'react';
import Paper from '@material-ui/core/Paper';
import './dropDownList.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
    widthPaper: {
        flexGrow: 1,
        height: '42px',
        marginTop: '7px'
    },
};



class DropDownList extends React.Component {
    constructor(props) {
        super(props);
        this.eachTask = this.eachTask.bind(this);
    }
    eachTask(items) {

            const { classes } = this.props;

            return(
                <Fragment key = {items.id}>
                    <Paper id='paperHover' className={classes.widthPaper}>
                        <Button fullWidth={true} href={'https://www.youtube.com/watch?v=' + items.href} key = {items.id}>
                            <li><b>{items.item}</b></li>
                        </Button>
                    </Paper>
                </Fragment>
        )
    }
    render() {
        let arrForYoutubeAPI = [
            {id: 1, item: this.props.words[0], href: this.props.videoId[0]},
            {id: 2, item: this.props.words[1], href: this.props.videoId[1]},
            {id: 3, item: this.props.words[2], href: this.props.videoId[2]},
            {id: 4, item: this.props.words[3], href: this.props.videoId[3]},
            {id: 5, item: this.props.words[4], href: this.props.videoId[4]},
        ]
        return(
                <ul>
                    {arrForYoutubeAPI.map(this.eachTask)}
                </ul>
        )
    }
}

export default withStyles(styles)(DropDownList);