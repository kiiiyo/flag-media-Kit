import { createClient } from 'microcms-js-sdk'

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN
const apiKey = process.env.MICROCMS_API_KEY

if (serviceDomain === undefined)
  throw Error(
    'You should set `MICROCMS_SERVICE_DOMAIN` in your .env file and next.config.js.'
  )

if (apiKey === undefined)
  throw Error(
    'You should set `MICROCMS_API_KEY` in your .env file and next.config.js.'
  )

export const apiClient = createClient({
  serviceDomain,
  apiKey
})
