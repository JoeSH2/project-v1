import { classNames } from './classNames';

describe('classNames', () => {
  test('all class', () => {
    expect(classNames('someClass', { hovered: true, toogle: false }, ['2'])).toBe('someClass hovered 2');
  });
});
