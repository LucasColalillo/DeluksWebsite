export interface IPage {
  title: string;
  slug: string;
  componentsCollection: {
    items: (IUiHero | IUiTestimonial | IUiServices | IUiQa | IUiCta | IUiEducative)[];
  };
}

export interface IUiEducative {
  __typename: "UiEducative";
  title: string;
  callToAction: {
    text: string;
    value: string;
  };
  educativesCollection:{
    items:
      {
    title: string
    description: string
    video: string
  }[]
}
}
export interface IUiHero {
  __typename: "UiHero";
  title: string;
  titleDown: string
  description: string;
  animation: string;
  label: string
  link: {
    text: string;
    value: string;
  };
}

export interface IUiTestimonial {
  __typename: "UiTestimonial";
  title: string;
  videosCollection: {
    items: {
      title: string;
      description: string;
      company: string;
      video: string;
    }[];
  };
}

export interface IUiServices {
  __typename: "UiServices";
  title: string;
  callToAction: {
    text: string;
    value: string;
  };
  servicesCollection: {
    items: {
      title: string;
      description: string;
      image: {
        description: string;
        url: string;
      };
    }[];
  };
}

export interface IUiQa {
  __typename: "UiQa";
  title: string;
  itemsCollection: {
    items: {
      question: string;
      answer: string;
    }[];
  };
}

export interface IUiCta {
  __typename: "UiCta";
  title: string;
  titleDown: string;
  description: string;
  callToAction: {
    text: string;
    value: string;
  };
}


export interface IHeader {
  logo: {
    description: string;
    url: string;
  };
  linksCollection: {
    items: IHeaderLink[];
  };
  callToAction: IHeaderLink
}

export interface IHeaderLink {
  text: string;
  value: string;
}

export interface IFooter {
  title: string;
  description: string;
  menuCollection: {
    items: IFooterMenu[];
  };
  socialLinksCollection: {
    items: IFooterSocialLink[];
  };
}

export interface IFooterMenu {
  title: string;
  linksCollection: {
    items: IFooterLink[];
  };
}

export interface IFooterLink {
  text: string;
  value: string;
}

export interface IFooterSocialLink {
  text: string;
  value: string;
  image: {
    description: string;
    url: string;
  };
}

export interface IData {
  data: {
    header: IHeader;
    footer: IFooter;
  };
}