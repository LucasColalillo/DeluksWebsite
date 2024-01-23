export const footerQuery = `
query Layout {
  header(id: "4qcTRXZOqhIJrsIsekGI6n"){
    logo{
      description
      url
    }
    linksCollection(limit: 6){
      items{
        text
        value
      }
    }
    callToAction{
      text
      value
    }
  }
    footer (id: "6e8QVDcc1qGM7zoaeuGcb3"){
      title
      description
      socialLinksCollection(limit: 5){
        items{
          text
          value
          image{
            description
            url
          }
        }
      }
      menuCollection(limit: 3){
        items{
          title
          linksCollection{
            items{
              text
              value
            }
          }
        }
      }
    }
  }
`;