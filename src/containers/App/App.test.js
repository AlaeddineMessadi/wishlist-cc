import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore } from '../../store/index';
import App from './App';

import { expect } from 'chai';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const store = createStore();

describe('<App>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render((
      <Provider store={ store }>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    ), div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // it('Find element', () => {
  //   const component = (<Provider store={ store }>
  //     <BrowserRouter>
  //       <App />
  //     </BrowserRouter>
  //   </Provider>)

  //   const wrapper = shallow(component);
  //   const wrapper2 = mount(component);

  //   console.log(wrapper2.debug())

  //   expect(wrapper.find('.search_link')).to.have.lengthOf(1);
  // });


});


