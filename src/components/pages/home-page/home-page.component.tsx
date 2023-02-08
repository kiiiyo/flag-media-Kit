import { Organisms, Templates } from '@/components'

import { mockArticleCollection } from '../../organisms/article-collection/testing/'

export const HomePage = () => {
  return (
    <Templates.RegularTemplate
      headerPane={<Organisms.Header />}
      footerPane={<Organisms.Footer />}
      asidePane={
        <>
          <Organisms.AsideShare />
          <div style={{ marginTop: 24 }}>
            <Organisms.AsideTopic articles={mockArticleCollection} />
          </div>

          <div style={{ marginTop: 24 }}>
            <Organisms.AsideCategory />
          </div>
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
