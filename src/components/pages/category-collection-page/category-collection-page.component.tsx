import { FolderIcon } from '@heroicons/react/24/solid'

import { Organisms, Templates } from '@/components'

export const CategoryCollectionPage = () => {
  return (
    <Templates.CollectionTemplate
      headerPane={<Organisms.Header />}
      footerPane={<Organisms.Footer />}
      pageHeader={
        <Organisms.CollectionPageHeader title="分類" icon={<FolderIcon />} />
      }
    >
      <Organisms.CategoryCollection />
    </Templates.CollectionTemplate>
  )
}
