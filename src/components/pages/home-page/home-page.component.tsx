import { Organisms, Templates } from '@/components'
import { Domain } from '@/features'

import { mockArticleCollection } from '../../organisms/article-collection/testing/'
import { useHomePagePresenter } from './home-page.presenter'

type Props = {
  articles: Domain.Article.Entity[]
  currentPageCount: number
  totalPageCount: number
}

export const HomePage = ({
  articles,
  currentPageCount,
  totalPageCount
}: Props) => {
  const { isEnableNext, isEnablePrevious, previousLink, nextLink } =
    useHomePagePresenter({
      currentPageCount,
      totalPageCount
    })

  return (
    <Templates.RegularTemplate
      headerPane={<Organisms.Header />}
      footerPane={<Organisms.Footer />}
      asidePane={
        <>
          <Organisms.AsideTopic articles={mockArticleCollection} />
          <Organisms.AsideShare />
        </>
      }
    >
      {articles && <Organisms.ArticleCollection articles={articles} />}

      <div style={{ marginTop: 40 }}>
        <Organisms.Pagination
          isEnableNext={isEnableNext}
          isEnablePrevious={isEnablePrevious}
          currentPageCount={currentPageCount}
          totalPageCount={totalPageCount}
          previousLink={previousLink}
          nextLink={nextLink}
        />
      </div>
    </Templates.RegularTemplate>
  )
}
