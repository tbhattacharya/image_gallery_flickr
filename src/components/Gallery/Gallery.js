import React from 'react';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import * as actionType from '../../store/actions/Gallery/actionType';
import GalleryHeader from './GalleryHeader';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './GalleryStyles';
import { forEach } from 'lodash';
import Thumbnails from './Thumbnails';
import Grid from '@material-ui/core/Grid';

class Gallery extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (isEmpty(this.props.photoGrid)) {
            this.props.fetchGalleryInformation('72157677476597845');
        }
    }

    getGalleryThumbnails = () => {
        let thumbs = [];
        forEach(this.props.photoGrid, photo => {
            thumbs.push(<Thumbnails image={photo} />);
        })
        return thumbs;
    }

    render() {
        const { galleryInfo, classes } = this.props;
        const description = (galleryInfo && galleryInfo.description) ? galleryInfo.description._content.replace(/\n/g, '<br />') : '';
        return (
            <div>
                <GalleryHeader gallery={galleryInfo} />
                <div className={classes.mainConatiner}>
                    <div className={classes.subtitle} contentEditable='true' dangerouslySetInnerHTML={{ __html: description }} ></div>
                    <Grid container spacing={24}>
                        {this.getGalleryThumbnails()}
                    </Grid>
                </div>
            </div >
        );
    }
}

const mapStateToProps = state => createStructuredSelector(
    {
        photoGrid: state => state.gallery.photoGrid,
        galleryInfo: state => state.gallery.galleryInfo
    });

const mapDispatchToProps = dispatch => {
    return {
        fetchGalleryInformation: id => dispatch({ type: actionType.FETCH_GRID_REQ, param: id })
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Gallery));