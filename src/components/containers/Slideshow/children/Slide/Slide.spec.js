import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { mockStore } from 'testUtils';

import Slide from './Slide';

describe('Slide', () => {
  const mockProps = {
    backgroundSize: 'cover',
    id: 'mock',
    src: 'mock',
    views: 99
  };

  describe('Basic rendering', () => {
    it('Should render expected components and content if passed expected props', (done) => {
      const component = mount(
        <Provider
          store={mockStore()}
        >
          <Slide {...mockProps} />
        </Provider>
      );

      expect(component).to.be.ok;
      expect(component.find('SlideInfo').length, 'expect slide info').to.equal(1);
      expect(
        component.find('SlideInfo').props().views,
        'expect slide info to be sent views'
      ).to.equal(mockProps.views);

      done();
    });
  });
});
