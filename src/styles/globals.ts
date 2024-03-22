import { globalCss } from '@arthurrios-ignite-ui/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: '$gray-900',
    color: '$gray-100',
    '-webkit-font-smoothing': 'antialiased',
  },
})
