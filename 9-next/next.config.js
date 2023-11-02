const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: { myName: 'Ali' }
    }
  }

  return {
    env: { myName: 'Qoli' },
    output: 'export',
    images: { unoptimized: true }
    /* config options for all phases except development here */
  }
}
