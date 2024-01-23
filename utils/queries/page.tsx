export const homepageQuery = `
query {
  page (id: "4hk4q3I5gduJXjrhob5Zv8") {
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
    title
    titleDown
    description
    callToAction{
      text
      value
    }
  }
`;