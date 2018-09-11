import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Thumbs } from '../../utils/Constants';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './GalleryStyles';

class Thumbnails extends React.Component {

    handleClick = ()=>{
        this.props.handleClick(this.props.image);
    }
    render() {
        const { image } = this.props;
        //Create image url for Lazy loader and return grid item element
        const src = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret }.jpg`;
        return (
            <Grid item xs={3} classes={{ container: 'true' }} className={this.props.classes.thumbnail}
                onClick={this.handleClick}>
                <div className={this.props.classes.overlayItem} >
                    {image.title}
                </div>
                <div className={this.props.classes.photo}>
                    <LazyLoadImage
                        height={Thumbs.height}
                        src={src}
                        effect="blur"
                        width={Thumbs.width} />
                </div>
            </Grid>
        );
    }
}
export default withStyles(styles)(Thumbnails);