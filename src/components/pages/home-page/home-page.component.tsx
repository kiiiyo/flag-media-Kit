import { Templates, Organisms } from '@/components'

export const HomePage = () => {
  return (
    <Templates.GeneralTemplate
      header={<Organisms.Header />}
      footer={<Organisms.Footer />}
    >
      <h1>Home Page</h1>
    </Templates.GeneralTemplate>
  )
}
