import { Inter } from 'next/font/google'
import './globals.css'
import UiHeader from '@/components/ui_header'
import UiFooter from '@/components/ui_footer'
import { contentfulClient } from '@/utils/contentfulClient'
import { FooterData, HeaderI } from '@/utils/intefaces'
import contentfulGQLClient from '@/utils/contentful-graphql'
import { footerQuery } from '@/utils/queries/footer'
import { IFooter, IHeader } from '@/utils/graphqlInterface'

const inter = Inter({ subsets: ['latin'] })


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const resFooter = await contentfulGQLClient.query({ query: footerQuery });
  const { data } = await resFooter.json() as {data: {header: IHeader, footer: IFooter}};
  return (
    <html lang="en">
      <body className={inter.className}>
        <UiHeader data={data.header} />
        {children}
        <UiFooter data={data.footer} />
      </body>
    </html>
  )
}
