import React from 'react';
import { truncate } from 'lodash';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './ImageSlideStyles';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';

class ImageFooter extends React.Component {

    render() {
        const { classes, imageInfo } = this.props;
        //TODO - Create the more link for the description
        const description = (imageInfo && imageInfo.description) ? imageInfo.description._content.replace(/\n/g, '<br />') : '';
        return (
            (imageInfo.id ? (
                <div className={classes.imageFooter}>
                    <div className={classes.imageFooterContent}>
                        <Grid container spacing={24}>
                            <Grid item xs={6} >
                                <div className={classes.imageName}>
                                    {imageInfo.title._content}
                                </div>
                                <div className={classes.imageBy}>
                                    Image By {imageInfo.owner.realname}
                                </div>
                                <div className={classes.imageBy}>
                                    Dated {moment(imageInfo.dates.taken).format('DD MMM YYYY')}
                                </div>
                            </Grid>
                            <Grid item xs={6} >
                                <div dangerouslySetInnerHTML={{ __html: truncate(description,{length: 120}) }} style={{maxHeight: '10px'}}></div>
                        </Grid>
                        </Grid>
                </div></div >) : '')
        );
    }
}

const mapStateToProps = state => createStructuredSelector(
    {
        imageInfo: state => state.imagedata.imageInfo
    });


export default withStyles(styles)(connect(mapStateToProps, null)(ImageFooter));