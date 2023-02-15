import { Domain } from '@/features'

type Args = {
  url: string
  alt: string
}

export function imageMapper({ url, alt }: Args): Domain.Image.Entity {
  return {
    url,
    alt
  }
}
