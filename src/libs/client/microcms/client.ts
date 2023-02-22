import { createClient } from 'microcms-js-sdk'

const serviceDomain = process.env.CONTENT_API_DOMAIN
const apiKey = process.env.CONTENT_API_KEY

if (serviceDomain === undefined)
  throw Error(
    'Missing serviceDomain is CONTENT_API_DOMAIN in environment value'
  )

if (apiKey === undefined)
  throw Error('Missing apiKey is CONTENT_API_KEY in environment value')

export const apiClient = createClient({
  serviceDomain,
  apiKey
})
