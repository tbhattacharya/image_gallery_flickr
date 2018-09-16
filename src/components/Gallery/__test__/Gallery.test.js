import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import { withStyles } from '@material-ui/core/styles';
import Gallery from '../Gallery';
import configureStore from 'redux-mock-store'
import { initialState } from '../../../store/initialState/Gallery/initialState';
import { gallery, photo } from '../../../utils/test-utils/GalleryData';
const mockStore = configureStore()


describe("Testing Gallery", function () {
  const shallow = createShallow();
  const store = mockStore(initialState)
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Gallery store={store} photoGrid= {photo} galleryInfo={gallery}/>)
  })

  it("Expect Gallery to be drawn without exception", function () {
    expect(wrapper).toBeDefined();
  });

  it("Expect Gallery to match snapshot", function () {
    expect(wrapper).toMatchSnapshot();
  });
});