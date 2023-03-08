import { FolderIcon } from '@heroicons/react/24/solid'

import { Organisms, Templates } from '@/components'
import { Domain } from '@/features'

type Props = { categories: Domain.Category.Entity[] }

export const CategoryCollectionPage = ({ categories }: Props) => {
  return (
    <Templates.CollectionTemplate
      headerPane={<Organisms.Header />}
      footerPane={<Organisms.Footer />}
      pageHeader={
        <Organisms.CollectionPageHeader title="分類" icon={<FolderIcon />} />
      }
    >
      <Organisms.CategoryCollection categories={categories} />
    </Templates.CollectionTemplate>
  )
}
