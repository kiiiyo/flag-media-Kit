import { Organisms, Templates } from '@/components'

export const ArticleSinglePage = () => {
  return (
    <Templates.CollectionSingleTemplate
      headerPane={<Organisms.Header />}
      footerPane={<Organisms.Footer />}
      pageHeader={<Organisms.ArticlePageHeader title="ポケモン" />}
      asidePane={
        <>
          <Organisms.AsideCategory title="分類" />
          <Organisms.AsideTag title="タイプ" />
          <Organisms.AsideShare />
        </>
      }
    >
      <Organisms.ArticlePageContent content="テキスト" />
      <div style={{ marginTop: 40 }}>
        <Organisms.Pagination isDisableNext={true} isDisablePrevious={true} />
      </div>
    </Templates.CollectionSingleTemplate>
  )
}
