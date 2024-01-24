export const footerQuery = `
query Layout {
  header(id: "7CSBvneKAGEnCLdtIlWNfP"){
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
    footer (id: "5nT0Mkos87DTWxFCViRgKh"){
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