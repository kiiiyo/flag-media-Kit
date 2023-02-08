import { Atoms, Organisms, Templates } from '@/components'

import { mockArticleCollection } from '../../organisms/article-collection/testing/'

export const HomePage = () => {
  return (
    <Templates.RegularTemplate
      headerPane={<Organisms.Header />}
      footerPane={<Organisms.Footer />}
      asidePane={
        <>
          <Organisms.AsideShare />
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
        </>
      }
    >
      <Organisms.ArticleCollection articles={mockArticleCollection} />
      <div style={{ marginTop: 40 }}>
        <Organisms.Pagination isDisableNext={true} isDisablePrevious={true} />
      </div>
    </Templates.RegularTemplate>
  )
}
