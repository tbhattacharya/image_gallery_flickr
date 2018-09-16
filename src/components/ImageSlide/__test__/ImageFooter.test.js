import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import { withStyles } from '@material-ui/core/styles';
import configureStore from 'redux-mock-store'
import { initialState } from '../../../store/initialState/ImageSlide/initialState';
import { image } from '../../../utils/test-utils/GalleryData';
import ImageFooter from '../ImageFooter';
const mockStore = configureStore()


describe("Testing Image Footer", function () {
  const store = mockStore(initialState)
  const shallow = createShallow();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ImageFooter store={store} imageInfo= {image}/>)
  })

  it("Expect Image Footer to be drawn without exception", function () {
    expect(wrapper).toBeDefined();
  });

  it("Expect Image Footer to match snapshot", function () {
    expect(wrapper).toMatchSnapshot();
  });
});