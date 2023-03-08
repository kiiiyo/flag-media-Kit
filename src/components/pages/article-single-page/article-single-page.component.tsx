import { Organisms, Templates } from '@/components'
import { Domain } from '@/features'

type Props = {
  article: Domain.Article.Entity
}

export const ArticleSinglePage = ({ article }: Props) => {
  const content = article.content || ''

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
        <Organisms.Pagination isDisableNext={true} isDisablePrevious={true} />
      </div>
    </Templates.CollectionSingleTemplate>
  )
}
