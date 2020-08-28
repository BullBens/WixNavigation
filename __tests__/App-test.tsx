import * as React from 'react';
import 'jest';
import 'react-native';
import renderer from 'react-test-renderer';
import {Main, Information} from '@screens';
import {render, fireEvent} from '@testing-library/react-native';

// configure({adapter: new Adapter()});

// describe('Testing react navigation', () => {
//   test('Render main screen', async () => {
//     const mainComponent = <Main />;
//     // const a = renderer.create(<Main />).toJSON();
//     // expect(a).toMatchSnapshot();
//     const {findByText, findAllByText} = render(mainComponent);
//     const toClick = await findByText('Open information screen');
//     fireEvent(toClick, 'press');
//   });
// });
it('Main screen render correctly', () => {
  const {toJSON} = render(<Main />);
  expect(toJSON()).toMatchSnapshot();
});
it('Information screen render correctly', () => {
  const {toJSON} = render(<Information />);
  expect(toJSON()).toMatchSnapshot();
});
