import { Atoms, Organisms, Templates } from '@/components'

export const CategoryCollectionPage = () => {
  return (
    <Templates.SingleColumnTemplate
      headerPane={<Organisms.Header />}
      footerPane={<Organisms.Footer />}
    >
      <Atoms.Skeleton kind="blue" style={{ height: '160px' }}>
        Page Header
      </Atoms.Skeleton>
      <Atoms.Skeleton kind="pink" style={{ height: '320px', marginTop: 24 }}>
        Category List
      </Atoms.Skeleton>
    </Templates.SingleColumnTemplate>
  )
}
