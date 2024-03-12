import pkg from '../../package.json'
import docsUrl from '../../src/docsUrl'

describe('docsUrl', () => {
  it('returns the rule documentation URL when given a rule name', () => {
    expect(docsUrl('foo')).toBe(
      `https://github.com/import-js/eslint-plugin-import/blob/v${pkg.version}/docs/rules/foo.md`,
    )
  })

  it('supports an optional commit-ish parameter', () => {
    expect(docsUrl('foo', 'bar')).toBe(
      'https://github.com/import-js/eslint-plugin-import/blob/bar/docs/rules/foo.md',
    )
  })
})