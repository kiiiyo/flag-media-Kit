const path = require('path')

module.exports = {
  /* NOTE: Set target extensions */
  '*.{js,ts,tsx}': (absolutePaths) => {
    const cwd = process.cwd()
    const relativePaths = absolutePaths
      .map((file) => path.relative(cwd, file))
      .join(' ')

    return [
      /* NOTE: Running multiple commands */
      `eslint ${relativePaths}`,
      `prettier --write ${relativePaths}`
    ]
  }
}
