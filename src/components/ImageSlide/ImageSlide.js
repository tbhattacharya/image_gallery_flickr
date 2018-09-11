import React from 'react';
import { isEmpty, forEach } from 'lodash';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import * as actionType from '../../store/actions/ImageSlide/actionTypes';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './ImageSlideStyles';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Thumbs } from '../../utils/Constants';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ImageFooter from './ImageFooter';

class ImageSlide extends React.Component {

    constructor(props) {
        super(props);
        const param = this.props.location.state;
        this.state = {
            id: param.id,
            secret: param.secret
        }
    }

    componentDidMount() {
        if (isEmpty(this.props.imageInfo)) {
            this.props.fetchPhotoInformation(this.state.id, this.state.secret);
        }
    }

    componentWillUnmount() {
        //Clear the redux store for image data so that new data is loaded when the page is revisited again
        this.props.clearPhotoInformation();
    }

    render() {
        const { classes, imageInfo } = this.props;
        //Create image url for Lazy loader
        const src = `https://farm${imageInfo.farm}.staticflickr.com/${imageInfo.server}/${imageInfo.id}_${imageInfo.secret}.jpg`;
        return (
            <div>
                <div className={classes.imageView}>
                    <div className={classes.image}>
                        {imageInfo.id ?
                            (<LazyLoadImage
                                height={Thumbs.height}
                                src={src}
                                effect="blur"
                                width={Thumbs.width} />) : null}
                    </div>
                </div>
                <ImageFooter />
            </div>
        );
    }
}

/** 
 * Use createStructuredSelector to improve performance, since memoized selectors cut down on the number of new
 * object/array references being returned from mapState functions.
*/
const mapStateToProps = state => createStructuredSelector(
    {
        imageInfo: state => state.imagedata.imageInfo
    });

const mapDispatchToProps = dispatch => {
    return {
        fetchPhotoInformation: (id, secret) => dispatch({ type: actionType.FETCH_IMAGE_INFO_REQ, param: { id: id, secret: secret } }),
        clearPhotoInformation: () => dispatch({ type: actionType.CLEAR_IMAGE_INFO_REQ })
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ImageSlide));