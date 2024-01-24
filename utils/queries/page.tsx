export const homepageQuery = `
query {
  page (id: "2kO8A7M25Ao39elw2vqTSO") {
  title
  slug
  componentsCollection{
    items{
      __typename
      ...Hero
      ...Testimonial
      ...Services
      ...Qa
      ...Cta
    }
  }
}

}

fragment Hero on UiHero {
  title
  titleDown
description
description
label
link{
  text
  value
}
animation
}

fragment Testimonial on UiTestimonial {
  title
  videosCollection (limit: 3){
    items{
      title
      description
      company
      video
    }
  }
}

fragment Services on UiServices {
  title
  servicesCollection (limit: 8){
    items{
      title
      description
      image{
        description
        url
      }
    }
  }
  callToAction {
    text
    value
  }
}

fragment Qa on UiQa {
  title
  itemsCollection (limit: 10) {
    items{
      question
      answer
    }
  }
}

fragment Cta on UiCta {
  titleUp
  titleDown
  description
  callToAction{
    text
    value
  }
}
`;

export const recursosEducativosPage = `
query {
  page (id: "2YEAh3ANxYn2jVuuU6KPAq") {
    title
    slug
    componentsCollection{
      items{
        __typename
        ...Hero
        ...Testimonial
        ...Services
        ...Qa
        ...Cta
        ...Educative
      }
    }
  }
  
  
}

fragment Hero on UiHero {
    title
    titleDown
  description
  description
  label
  link{
    text
    value
  }
  animation
  }
  
  fragment Testimonial on UiTestimonial {
    title
    videosCollection (limit: 3){
      items{
        title
        description
        company
        video
      }
    }
  }
  
  fragment Services on UiServices {
    title
    servicesCollection (limit: 8){
      items{
        title
        description
        image{
          description
          url
        }
      }
    }
    callToAction {
      text
      value
    }
  }
  
  fragment Qa on UiQa {
    title
    itemsCollection (limit: 10) {
      items{
        question
        answer
      }
    }
  }
  
  fragment Cta on UiCta {
    title
    titleDown
    description
    callToAction{
      text
      value
    }
  }
  
  fragment Educative on UiEducative {
  	title
    callToAction{
      text
      value
    }
    educativesCollection(limit: 5){
      items{
        title
        description
        video
      }
    }
  }
`;