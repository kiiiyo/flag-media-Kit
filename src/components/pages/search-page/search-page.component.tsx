import { Atoms, Organisms, Templates } from '@/components'

export const SearchPage = () => {
  return (
    <Templates.SingleColumnTemplate
      headerPane={<Organisms.Header />}
      footerPane={<Organisms.Footer />}
    >
      <Atoms.Skeleton kind="pink" style={{ height: '320px' }}>
        Search Form
      </Atoms.Skeleton>
    </Templates.SingleColumnTemplate>
  )
}
