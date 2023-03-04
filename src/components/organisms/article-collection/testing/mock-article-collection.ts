import { Article } from '@/features/domain'

export const mockArticleCollection: Article.Entity[] = [
  {
    id: 'mock-article-id-1',
    slug: 'mock-article-slug-001',
    title: '見出しテキスト見出しテキスト見出しテキスト見出しテキスト',
    description: '',
    createdAt: '2022-05-23T12:40:40.529Z',
    updatedAt: '2022-05-23T12:40:40.529Z',
    publishedAt: '2022-05-23T12:40:40.529Z',
    category: {
      id: 'mock-category-id-1',
      slug: 'category-slug-1',
      name: 'カテゴリーA'
    },
    tags: [
      {
        id: 'mock-tag-id-1',
        slug: 'mock-tag-slug-a',
        name: 'タグA'
      },
      {
        id: 'mock-tag-id-2',
        slug: 'mock-tag-slug-b',
        name: 'タグB'
      }
    ]
  },
  {
    id: 'mock-article-id-2',
    slug: 'mock-article-slug-002',
    title: '見出しテキスト見出しテキスト見出しテキスト見出しテキスト',
    category: {
      id: 'mock-category-id-2',
      slug: 'category-slug-b',
      name: 'カテゴリーB'
    },
    description: '',
    createdAt: '2022-05-23T12:40:40.529Z',
    updatedAt: '2022-05-23T12:40:40.529Z',
    publishedAt: '2022-05-23T12:40:40.529Z',
    tags: [
      {
        id: 'mock-tag-id-1',
        slug: 'mock-tag-slug-a',
        name: 'タグA'
      },
      {
        id: 'mock-tag-id-2',
        slug: 'mock-tag-slug-b',
        name: 'タグB'
      },
      {
        id: 'mock-tag-id-3',
        slug: 'mock-tag-slug-c',
        name: 'タグC'
      }
    ]
  },
  {
    id: 'mock-article-id-3',
    slug: 'mock-article-slug-003',
    title: 'テキスト',
    category: {
      id: 'mock-category-id-3',
      slug: 'category-slug-c',
      name: 'カテゴリーC'
    },
    description: '',
    createdAt: '2022-05-23T12:40:40.529Z',
    updatedAt: '2022-05-23T12:40:40.529Z',
    publishedAt: '2022-05-23T12:40:40.529Z',
    tags: [
      {
        id: 'mock-tag-id-1',
        slug: 'mock-tag-slug-a',
        name: 'タグA'
      },
      {
        id: 'mock-tag-id-2',
        slug: 'mock-tag-slug-b',
        name: 'タグB'
      },
      {
        id: 'mock-tag-id-3',
        slug: 'mock-tag-slug-c',
        name: 'タグC'
      }
    ]
  },
  {
    id: 'mock-article-id-4',
    slug: 'mock-article-004',
    title: 'テキスト',
    category: {
      id: 'mock-category-id-1',
      slug: 'category-slug-c',
      name: 'カテゴリーC'
    },
    description: '',
    createdAt: '2022-05-23T12:40:40.529Z',
    updatedAt: '2022-05-23T12:40:40.529Z',
    publishedAt: '2022-05-23T12:40:40.529Z'
  }
]
