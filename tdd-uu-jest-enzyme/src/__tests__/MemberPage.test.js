import React from 'react';
import { MemoryRouter } from 'react-router';
import { mount } from '../enzyme';

/* import all 3 pages here */
import LandingPage from '../components/LandingPage';
import MemberPage from '../components/MemberPage';
import NotFoundPage from '../components/NotFoundPage';


describe('Testing routes', () => {
  // Overall: Create a MemberPage component containing 2 routes
  // route 1 --> LandingPage given a route of '/'
  // route 2 --> NotFoundPage given any other route of '/<random text>'


  // Problem 1) write a test case to test that the NotFoundPage is rendered when
  // given an invalid route
  // Use 'mount' to render your component

  it('invalid path should redirect to 404', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/random']}>
        <MemberPage />
      </MemoryRouter>,
    );
    expect(wrapper.find(LandingPage)).toHaveLength(0);
    expect(wrapper.find(NotFoundPage)).toHaveLength(1);
  });


  // Problem 2) write a test case to test that the LandingPage is rendered when
  // given the default route of '/'
  // Use 'mount' to render your component

  it('valid path should redirect to landing page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <MemberPage />
      </MemoryRouter>,
    );
    expect(wrapper.find(LandingPage)).toHaveLength(1);
    expect(wrapper.find(NotFoundPage)).toHaveLength(0);
  });
});
