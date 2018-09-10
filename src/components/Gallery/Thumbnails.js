import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Thumbs } from '../../utils/Constants';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './GalleryStyles';

class Thumbnails extends React.Component {

    render() {
        const { image } = this.props;
        const src = 'https://farm' + image.farm + '.staticflickr.com/' + image.server + '/' + image.id + '_' + image.secret + '.jpg';
        return (
            <Grid item xs={3}>
                <LazyLoadImage
                    height={Thumbs.height}
                    src={src}
                    effect="blur"
                    width={Thumbs.width} />
            </Grid>
        );
    }
}
export default withStyles(styles)(Thumbnails);