import { FolderIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

import { Atoms, Organisms, Templates } from '@/components'

export const CategoryCollectionPage = () => {
  return (
    <Templates.CollectionTemplate
      headerPane={<Organisms.Header />}
      footerPane={<Organisms.Footer />}
      pageHeader={
        <Organisms.CollectionPageHeader title="分類" icon={<FolderIcon />} />
      }
    >
      <Link href="/categories/slag">
        <Atoms.Skeleton kind="pink" style={{ height: '320px' }}>
          Category List
        </Atoms.Skeleton>
      </Link>
    </Templates.CollectionTemplate>
  )
}
