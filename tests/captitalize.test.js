import capitalize from '../src/capitalize';

test('works', () => {
    expect(capitalize('ABCDEFG')).toBe('Abcdefg');
  });
