import { ReactNode, Fragment } from 'react'

type Props = {
  header?: ReactNode
  footer?: ReactNode
  children: ReactNode
}

export const GeneralTemplate = ({ header, footer, children }: Props) => {
  return (
    <Fragment>
      {header && <div>{header}</div>}
      <div>
        <main>{children}</main>
      </div>
      {footer && <div>{footer}</div>}
    </Fragment>
  )
}
