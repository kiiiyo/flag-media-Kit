import Link from 'next/link'

import { Atoms, Organisms, Templates } from '@/components'

export const ArticlePage = () => {
  return (
    <Templates.RegularTemplate
      headerPane={<Organisms.Header />}
      footerPane={<Organisms.Footer />}
      asidePane={
        <>
          <Atoms.Skeleton kind="blue" style={{ height: '240px' }}>
            Article Meta
          </Atoms.Skeleton>
          <Link href="/authors/name">
            <Atoms.Skeleton
              kind="blue"
              style={{ height: '160px', marginTop: 24 }}
            >
              Author
            </Atoms.Skeleton>
          </Link>
        </>
      }
    >
      <Atoms.Skeleton kind="pink" style={{ height: '1240px' }}>
        Article
      </Atoms.Skeleton>
    </Templates.RegularTemplate>
  )
}
