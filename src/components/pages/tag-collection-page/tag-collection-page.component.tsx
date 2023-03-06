import { TagIcon } from '@heroicons/react/24/solid'

import { Organisms, Templates } from '@/components'
import { Domain } from '@/features'

type Props = { tags: Domain.Tag.Entity[] }

export const TagCollectionPage = ({ tags }: Props) => {
  return (
    <Templates.CollectionTemplate
      headerPane={<Organisms.Header />}
      footerPane={<Organisms.Footer />}
      pageHeader={
        <Organisms.CollectionPageHeader title="タイプ" icon={<TagIcon />} />
      }
    >
      <Organisms.TagCollection tags={tags} />
    </Templates.CollectionTemplate>
  )
}
