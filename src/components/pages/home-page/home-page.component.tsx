import { Atoms, Organisms, Templates } from '@/components'

export const HomePage = () => {
  return (
    <Templates.RegularTemplate
      headerPane={<Organisms.Header />}
      footerPane={<Organisms.Footer />}
      asidePane={
        <>
          <Atoms.Skeleton kind="blue" style={{ height: '240px' }}>
            Ad Banner
          </Atoms.Skeleton>
          <Atoms.Skeleton
            kind="blue"
            style={{ height: '160px', marginTop: 24 }}
          >
            Share
          </Atoms.Skeleton>
          <Atoms.Skeleton
            kind="blue"
            style={{ height: '320px', marginTop: 24 }}
          >
            Topic Article
          </Atoms.Skeleton>
          <Atoms.Skeleton
            kind="blue"
            style={{ height: '320px', marginTop: 24 }}
          >
            Category
          </Atoms.Skeleton>
          <Atoms.Skeleton
            kind="blue"
            style={{ height: '160px', marginTop: 24 }}
          >
            Hash Tags
          </Atoms.Skeleton>
        </>
      }
    >
      <Atoms.Skeleton kind="pink" style={{ height: '1240px' }}>
        Article Collection
      </Atoms.Skeleton>
      <Atoms.Skeleton kind="blue" style={{ height: '40px', marginTop: 24 }}>
        Pagination
      </Atoms.Skeleton>
    </Templates.RegularTemplate>
  )
}
