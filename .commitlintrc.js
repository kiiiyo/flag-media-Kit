module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      /* NOTE: Level 2 an error */
      2,
      /* NOTE: Applicable */
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore'
      ]
    ]
  }
}
