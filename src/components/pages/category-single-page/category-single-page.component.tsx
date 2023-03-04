import { FolderIcon } from '@heroicons/react/24/solid'

import { Organisms, Templates } from '@/components'

import { mockArticleCollection } from '../../organisms/article-collection/testing/'

export const CategorySinglePage = () => {
  return (
    <Templates.CollectionSingleTemplate
      headerPane={<Organisms.Header />}
      footerPane={<Organisms.Footer />}
      pageHeader={
        <Organisms.CollectionPageHeader
          title="分類:〇〇"
          icon={<FolderIcon />}
        />
      }
      asidePane={
        <>
          <Organisms.AsideShare />
        </>
      }
    >
      {mockArticleCollection.length > 0 && (
        <Organisms.ArticleCollection articles={mockArticleCollection} />
      )}
      <div style={{ marginTop: 40 }}>
        <Organisms.Pagination isDisableNext={true} isDisablePrevious={true} />
      </div>
    </Templates.CollectionSingleTemplate>
  )
}
