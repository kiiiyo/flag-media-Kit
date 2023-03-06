import { TagIcon } from '@heroicons/react/24/solid'

import { Organisms, Templates } from '@/components'

export const TagCollectionPage = () => {
  return (
    <Templates.CollectionTemplate
      headerPane={<Organisms.Header />}
      footerPane={<Organisms.Footer />}
      pageHeader={
        <Organisms.CollectionPageHeader title="タイプ" icon={<TagIcon />} />
      }
    >
      <Organisms.TagCollection />
    </Templates.CollectionTemplate>
  )
}
