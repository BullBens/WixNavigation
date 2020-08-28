import {render, fireEvent} from '@testing-library/react-native';
import {Main, Information} from '@screens';

// configure({adapter: new Adapter()});

describe('Testing react navigation', () => {
  test('Render main screen', async () => {
    await element(by.text('Open information screen')).tap();
  });
});
// it('Main screen render correctly', () => {
//   const {toJSON} = render(<Main />);
//   expect(toJSON()).toMatchSnapshot();
// });
// it('Information screen render correctly', () => {
//   const {toJSON} = render(<Information />);
//   expect(toJSON()).toMatchSnapshot();
// });
