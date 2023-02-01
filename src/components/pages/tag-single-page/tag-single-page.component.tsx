import { Atoms, Organisms, Templates } from '@/components'

export const TagSinglePage = () => {
  return (
    <Templates.SingleColumnTemplate
      headerPane={<Organisms.Header />}
      footerPane={<Organisms.Footer />}
    >
      <Atoms.Skeleton kind="blue" style={{ height: '160px' }}>
        Page Header
      </Atoms.Skeleton>
      <Atoms.Skeleton kind="pink" style={{ height: '320px', marginTop: 24 }}>
        Article List
      </Atoms.Skeleton>
      <Atoms.Skeleton kind="blue" style={{ height: '48px', marginTop: 24 }}>
        Pagination
      </Atoms.Skeleton>
    </Templates.SingleColumnTemplate>
  )
}
