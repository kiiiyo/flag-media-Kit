import { Article } from '@/features/domain'

export const mockArticleCollection: Article.Entity[] = [
  {
    id: 1,
    slug: 'mock-article-001',
    image: {
      url: 'https://picsum.photos/seed/picsum/200/300',
      alt: ''
    },
    title: '見出しテキスト見出しテキスト見出しテキスト見出しテキスト',
    description: '',
    createdAt: '2022-05-23T12:40:40.529Z',
    updatedAt: '2022-05-23T12:40:40.529Z',
    publishedAt: '2022-05-23T12:40:40.529Z',
    category: {
      id: 1,
      slug: 'category-slug-1',
      name: 'カテゴリーA'
    },
    tags: [
      {
        id: 1,
        slug: 'mock-tag-a',
        name: 'タグA'
      },
      {
        id: 2,
        slug: 'mock-tag-b',
        name: 'タグB'
      }
    ]
  },
  {
    id: 2,
    slug: 'mock-article-002',
    image: {
      url: 'https://picsum.photos/id/20/200/300',
      alt: ''
    },
    title: '見出しテキスト見出しテキスト見出しテキスト見出しテキスト',
    category: {
      id: 1,
      slug: 'category-slug-1',
      name: 'カテゴリーB'
    },
    description: '',
    createdAt: '2022-05-23T12:40:40.529Z',
    updatedAt: '2022-05-23T12:40:40.529Z',
    publishedAt: '2022-05-23T12:40:40.529Z',
    tags: [
      {
        id: 1,
        slug: 'mock-tag-a',
        name: 'タグA'
      },
      {
        id: 2,
        slug: 'mock-tag-b',
        name: 'タグB'
      },
      {
        id: 3,
        slug: 'mock-tag-C',
        name: 'タグC'
      }
    ]
  },
  {
    id: 3,
    slug: 'mock-article-003',
    image: {
      url: 'https://picsum.photos/id/100/200/300',
      alt: ''
    },
    title: 'テキスト',
    category: {
      id: 1,
      slug: 'category-slug-c',
      name: 'カテゴリーC'
    },
    description: '',
    createdAt: '2022-05-23T12:40:40.529Z',
    updatedAt: '2022-05-23T12:40:40.529Z',
    publishedAt: '2022-05-23T12:40:40.529Z',
    tags: [
      {
        id: 1,
        slug: 'mock-tag-a',
        name: 'タグA'
      },
      {
        id: 2,
        slug: 'mock-tag-b',
        name: 'タグB'
      },
      {
        id: 3,
        slug: 'mock-tag-C',
        name: 'タグC'
      }
    ]
  }
]
