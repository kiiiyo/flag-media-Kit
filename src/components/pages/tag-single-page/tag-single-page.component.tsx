import { TagIcon } from '@heroicons/react/24/solid'

import { Organisms, Templates } from '@/components'
import { Domain } from '@/features'

type Props = {
  tag: Domain.Tag.Entity
  articles: Domain.Article.Entity[]
}

export const TagSinglePage = ({ tag, articles }: Props) => {
  return (
    <Templates.CollectionSingleTemplate
      headerPane={<Organisms.Header />}
      footerPane={<Organisms.Footer />}
      pageHeader={
        <Organisms.CollectionPageHeader
          title={`タイプ: ${tag.name}`}
          icon={<TagIcon />}
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
