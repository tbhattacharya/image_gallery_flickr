import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import { gallery } from '../../../utils/test-utils/GalleryData';
import GalleryHeader from '../GalleryHeader';

describe("Testing GalleryHeader", function () {
    const shallow = createShallow();
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<GalleryHeader galleryInfo={gallery}/>)
    })
  
    it("Expect GalleryHeader to be drawn without exception", function () {
      expect(wrapper).toBeDefined();
    });
  

    it("Expect GalleryHeader to match snapshot", function () {
        expect(wrapper).toMatchSnapshot();
      });
  });