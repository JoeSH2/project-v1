import { classNames } from 'shared/lib/classNames/classNames';

test('all class', () => {
  expect(classNames('someClass', { hovered: true, toogle: false }, ['2']))
    .toBe('someClass hovered 2');
});
test('with only first param', () => {
  expect(classNames('someClass')).toBe('someClass');
});

test('with additional class', () => {
  const expected = 'someClass class1 class2';
  expect(classNames('someClass', {}, ['class1', 'class2']))
    .toBe(expected);
});

test('with mods', () => {
  const expected = 'someClass hovered scrollable class1 class2';
  expect(classNames(
    'someClass',
    { hovered: true, scrollable: true },
    ['class1', 'class2'],
  )).toBe(expected);
});

test('with mods false', () => {
  const expected = 'someClass hovered class1 class2';
  expect(classNames(
    'someClass',
    { hovered: true, scrollable: false },
    ['class1', 'class2'],
  )).toBe(expected);
});

test('with mods undefined', () => {
  const expected = 'someClass hovered class1 class2';
  expect(classNames(
    'someClass',
    { hovered: true, scrollable: undefined },
    ['class1', 'class2'],
  )).toBe(expected);
});
