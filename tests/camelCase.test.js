import camelCase from '../src/camelCase.js';

test('works', () => {
    expect(camelCase('Foo Bar')).toBe('fooBar');
  });
