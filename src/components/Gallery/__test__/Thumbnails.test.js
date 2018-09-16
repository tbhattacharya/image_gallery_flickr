import React from 'react';
import { photo } from '../../../utils/test-utils/GalleryData';
import { withStyles } from '@material-ui/core/styles';
import { createRender } from '@material-ui/core/test-utils';
import Thumbnails from '../Thumbnails';

describe("Testing GalleryHeader", function () {
    const render = createRender();
    const mockCallback = jest.fn();
    let wrapper;
    beforeEach(() => {
        wrapper = render(<Thumbnails key={photo[0].id} image={photo[0]} handleClick = {()=>{mockCallback()}} />)
    })

    it("Expect Thumbnail to be drawn without exception", function () {
        expect(wrapper).toBeDefined();
    });


    it("Expect Thumbnail to match snapshot", function () {
        expect(wrapper).toMatchSnapshot();
    });
});