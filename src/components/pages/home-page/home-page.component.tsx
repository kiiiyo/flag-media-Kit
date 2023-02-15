import { Organisms, Templates } from '@/components'
import { Domain } from '@/features'

import { mockArticleCollection } from '../../organisms/article-collection/testing/'

type Props = { articles: Domain.Article.Entity[] }

export const HomePage = ({ articles }: Props) => {
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
      {articles && <Organisms.ArticleCollection articles={articles} />}

      <div style={{ marginTop: 40 }}>
        <Organisms.Pagination isDisableNext={true} isDisablePrevious={true} />
      </div>
    </Templates.RegularTemplate>
  )
}
