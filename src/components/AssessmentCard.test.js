import React from 'react';
import renderer from 'react-test-renderer';
import {AssessmentCard} from './AssessmentCard';
import {ADVANCE_HEALTH_SCREENING} from '../assets';

it('renders correctly when there is no item', () => {
  const tree = renderer.create(<AssessmentCard />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when there 99999 points', () => {
  const hugePoints = {
    title: 'Advanced Health Screening',
    points: 99999,
    image: ADVANCE_HEALTH_SCREENING,
  };
  const tree = renderer.create(<AssessmentCard item={hugePoints} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when there is no point in the item', () => {
  const noPoint = {
    title: 'Advanced Health Screening',
    image: ADVANCE_HEALTH_SCREENING,
  };
  const tree = renderer.create(<AssessmentCard item={noPoint} />).toJSON();
  expect(tree).toMatchSnapshot();
});
