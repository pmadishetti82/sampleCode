import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from '../enzyme';

import List from '../components/List';
import ListItem from '../components/ListItem';

describe('Testing the traversion of components', () => {
  describe('Testing components using shallow and mount', () => {
    // Overall: You are thinking about a container that renders a list of 'items'
    // that you will be passing as an array to
    // The List component will take the array of 'items' and renders each item
    // to a ListItem component
    // When nothing is passed to your List (items=[]), the error message will be
    // contained inside a <span>, 'No items in list'

    // Problem 1) write a test case to test the rendering of the List component when
    // an array of 0 'items' are passed into it
    // check that the 'empty-message' class is defined
    // check that the 'span' contains the message 'No items in list'
    // Use 'shallow' as a wrapper to your List component

    it('should render an error message when given an empty list', () => {
      const items = [];
      const wrapper = shallow(<List items={items} />);

      expect(wrapper.find('empty-message')).toBeDefined();
      expect(wrapper.find('span').text()).toEqual('No items in list');

      // do the line above or this, but this line is overly excessive as you
      // might as well test the state
      expect(wrapper.contains(<span className='empty-message'>No items in list</span>)).toBeTruthy();
    });


    // Problem 2) write a test case to test that when the List component receives
    // X number of 'items', it will actually render that many lines
    // check that ListItem is defined
    // check that ListItems appears the same number of times as the number of 'items'
    // Use 'shallow' as a wrapper to your List component

    it('should render 3 list items when given an array of 3 items', () => {
      const items = ['one', 'two', 'three'];
      const wrapper = shallow(<List items={items} />);

      // expect the wrapper object to be defined
      expect(wrapper.find('ListItem')).toBeDefined();
      expect(wrapper.find('ListItem')).toHaveLength(items.length);
    });


    // Problem 3) write a test case to test that when the List component receives
    // items with unique values, those values are created as ListItems
    // check that a line item containing items[0] exists 'toBeTruthy()'
    // check that a line item containing items[1] exists 'toBeTruthy()'
    // Use 'mount' as a wrapper to your List component, since you need to render
    // what's in the child components

    it('should render the actual items per row provided in the array of items', () => {
      const items = ['Thor', 'Loki'];
      const wrapper = mount(<List items={items} />);

      // check if an element in the component exists
      expect(wrapper.contains(<li key='Thor' className='item'>Thor</li>)).toBeTruthy();
      expect(wrapper.contains(<li key='Loki' className='item'>Loki</li>)).toBeTruthy();
    });


    // Problem 4) write a test case to test that when the List component receives
    // items, that it's passed to the ListItem's 'props'
    // check that ListItem's 'props' contains the first item in your items list
    // Use 'mount' as a wrapper to your List component

    it('renders correct text in item', () => {
      const items = ['John', 'James', 'Luke'];
      const wrapper = mount(<List items={items} />);

      // expect the child of the first item to be an array
      expect(wrapper.find('.item').get(0).props.children).toEqual('John');
    });
  });


  describe('testing snapshots', () => {
    // Problem 5) write a test case to take a snapshot of the List component
    // the List component should accept an array of 'items'
    // the rendered List must then be compared against the snapshot

    it('should take a snap shot of List with 3 ListItems', () => {
      const items = ['one', 'two', 'three'];
      const list = renderer
        .create(<List items={items} />)
        .toJSON();
      expect(list).toMatchSnapshot();
    });


    // Problem 6) write a test case to take a snapshot of the ListItem component
    // the List component should accept a single item
    // the rendered ListItem must then be compared against the snapshot

    it('should take a snapshot of ListItem with 1 item', () => {
      const stuff = 'stuff';
      const listItem = renderer
        .create(<ListItem key={stuff} item={stuff} />)
        .toJSON();
      expect(listItem).toMatchSnapshot();
    });
  });
});
