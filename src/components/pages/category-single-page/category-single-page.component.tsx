import { FolderIcon } from '@heroicons/react/24/solid'

import { Organisms, Templates } from '@/components'
import { Domain } from '@/features'

type Props = {
  category: Domain.Category.Entity
  articles: Domain.Article.Entity[]
}

export const CategorySinglePage = ({ category, articles }: Props) => {
  return (
    <Templates.CollectionSingleTemplate
      headerPane={<Organisms.Header />}
      footerPane={<Organisms.Footer />}
      pageHeader={
        <Organisms.CollectionPageHeader
          title={`分類: ${category.name}`}
          icon={<FolderIcon />}
        />
      }
      asidePane={
        <>
          <Organisms.AsideShare />
        </>
      }
    >
      {articles.length > 0 && (
        <Organisms.ArticleCollection articles={articles} />
      )}
      <div style={{ marginTop: 40 }}>
        <Organisms.Pagination isEnableNext={false} isEnablePrevious={false} />
      </div>
    </Templates.CollectionSingleTemplate>
  )
}
