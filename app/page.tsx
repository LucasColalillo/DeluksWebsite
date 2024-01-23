import UiCallToAction from '@/components/ui_calltoaction'
import Ui_faq from '@/components/ui_faq'
import UiHero from '@/components/ui_hero'
import { UiVerticalSlider } from '@/components/ui_verticalslider'
import UiVideoTestimonial from '@/components/ui_videoTestimonial'
import contentfulGQLClient from '@/utils/contentful-graphql'
import { contentfulClient } from '@/utils/contentfulClient'
import { IPage, IUiCta, IUiHero, IUiQa, IUiServices, IUiTestimonial } from '@/utils/graphqlInterface'
import { SeoEntry } from '@/utils/intefaces'
import { homepageQuery } from '@/utils/queries/page'


import { Metadata } from 'next'

 
export async function generateMetadata(): Promise<Metadata> {
 
  const response = await contentfulClient.getEntries({
    content_type: 'page',
    'fields.slug': 'home',
    limit: 1,
    include: 2,
    select: 'fields.seo' as any
  });
  const seoData: SeoEntry = response.items[0]?.fields.seo as any;

  let url = seoData.fields.ogImage.fields.file?.url as string

  if (url.startsWith('//')) {
  url = "https:" + url;

}
  return {
    title: seoData.fields.title,
    description: seoData.fields.description,
    openGraph: {
      url: 'https://sukraxia.com/',
      title: seoData.fields.ogTitle,
        description: seoData.fields.description,
        images: [
          { url: url },
        ],
        siteName: seoData.fields.title,
    },
  }
}

export default async function Home() {

      const res = await contentfulGQLClient.query({ query: homepageQuery });
      const { data } = await res.json() as {data: {page: IPage}};

  return (  
    <>    
    <main>
    {data.page.componentsCollection.items.map((component) => {
          const contentType = component.__typename;

          switch (contentType) {
            case 'UiHero':
              return <UiHero key={component.__typename} data={component as IUiHero} />;
            case 'UiTestimonial':
              return <UiVideoTestimonial key={component.__typename} data={component as IUiTestimonial} />;
            case 'UiServices':
              return <UiVerticalSlider key={component.__typename} data={component as IUiServices} />;
            case 'UiQa':
              return <Ui_faq key={component.__typename} data={component as IUiQa}/>;
            case 'UiCta':
              return <UiCallToAction key={component.__typename} data={component as IUiCta} />;
            default:
              return null;
          }
        })}

    </main>
    </>
  )
}
