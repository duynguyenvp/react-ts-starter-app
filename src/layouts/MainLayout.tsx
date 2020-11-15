import React, { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export default function MainLayout(props: Props) {
  const { children } = props
  return <section className="main-layout">{children}</section>
}
