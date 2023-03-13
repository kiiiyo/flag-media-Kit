import { Organisms, Templates } from '@/components'
import { Domain } from '@/features'

type Props = {
  article: Domain.Article.Entity
}

export const ArticleSinglePage = ({ article }: Props) => {
  // TODO:
  const content = article.content || ''
  const isEnablePrevious = !article.previousArticle ?? true
  const isEnableNext = !article.nextArticle ?? true
  const previousLink = article.previousArticle
    ? `/articles/${article.previousArticle.id}`
    : null
  const nextLink = article.nextArticle
    ? `/articles/${article.nextArticle.id}`
    : null

  return (
    <Templates.CollectionSingleTemplate
      headerPane={<Organisms.Header />}
      footerPane={<Organisms.Footer />}
      pageHeader={
        <Organisms.ArticlePageHeader
          title={article.title}
          imageUrl={article.imageUrl}
        />
      }
      asidePane={
        <>
          <Organisms.AsideCategory title="分類" category={article.category} />
          <Organisms.AsideTag title="タイプ" tags={article.tags} />
          <Organisms.AsideShare />
        </>
      }
    >
      <Organisms.ArticlePageContent content={content} />
      <div style={{ marginTop: 40 }}>
        <Organisms.Pagination
          isEnablePrevious={isEnablePrevious}
          isEnableNext={isEnableNext}
          previousLink={previousLink}
          nextLink={nextLink}
        />
      </div>
    </Templates.CollectionSingleTemplate>
  )
}
