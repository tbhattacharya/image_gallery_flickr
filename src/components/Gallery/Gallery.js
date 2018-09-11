import React from 'react';
import { isEmpty, forEach } from 'lodash';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import * as actionType from '../../store/actions/Gallery/actionType';
import GalleryHeader from './GalleryHeader';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './GalleryStyles';
import Thumbnails from './Thumbnails';
import Grid from '@material-ui/core/Grid';

class Gallery extends React.Component {

    componentDidMount() {
        //Load data if redux store is empty
        if (isEmpty(this.props.photoGrid)) {
            this.props.fetchGalleryInformation('72157677476597845');
        }
    }

    /**
     * Iterate over the photo array and create thumbnail component
     */
    getGalleryThumbnails = () => {
        let thumbs = [];
        forEach(this.props.photoGrid, photo => {
            thumbs.push(<Thumbnails key={photo.id} image={photo} handleClick={this.handleClick} />);
        })
        return thumbs;
    }

    // Handle click and navigate passing id and secret in state
    handleClick = (image) => {
        this.props.history.push(
            {
                pathname: '/slide',
                state: {
                    id: image.id,
                    secret: image.secret
                }
            }
        );
    }

    render() {
        const { galleryInfo, classes } = this.props;
        //The descriptions seems to be formatted. Replace for html display
        const description = (galleryInfo && galleryInfo.description) ? galleryInfo.description._content.replace(/\n/g, '<br />') : '';
        return (
            <div>
                <GalleryHeader gallery={galleryInfo} />
                <div className={classes.mainConatiner}>
                    <div className={classes.subtitle} dangerouslySetInnerHTML={{ __html: description }} />
                    <Grid container spacing={24}>
                        {this.getGalleryThumbnails()}
                    </Grid>
                </div>
            </div >
        );
    }
};

/** 
 * Use createStructuredSelector to improve performance, since memoized selectors cut down on the number of new
 * object/array references being returned from mapState functions.
*/
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