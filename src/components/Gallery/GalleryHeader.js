import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { styles } from './GalleryStyles';
import React from 'react';

class GalleryHeader extends React.Component {

    render() {
        const { classes, gallery } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Gallery - {gallery && gallery.title ? gallery.title._content : ''}
                        </Typography>
                        <div>
                        <Typography variant="subheading" color="inherit">
                            &nbsp;&nbsp;Images by - {gallery ? gallery.owner_name : ''}
                        </Typography>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(GalleryHeader);