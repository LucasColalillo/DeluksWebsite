export interface Sys {
    space?: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment?: {
      sys: {
        id: string;
        type: string;
        linkType: string;
      };
    };
    revision: number;
    locale: string;
    contentType: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
  }
  
  export interface Fields {
    title?: string;
    description?: string;
    file?: {
      url: string;
      details: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
    text?: string;
    value: string;
    image: Asset
  }
  
  export interface Metadata {
    tags: any[];
  }
  
  export interface Asset {
    metadata: Metadata;
    sys: Sys;
    fields: Fields;
  }
  
  export interface Entry {
    metadata: Metadata;
    sys: Sys;
    fields: Fields;
  }
  
  export interface HeaderI {
    logo: Asset;
    links: Entry[];
    callToAction: Entry;
  }
  export interface TestimonialVideoFields {
    title: string;
    description: string;
    company: string;
    video: string;
  }
  
  export interface TestimonialVideoEntry {
    metadata: Metadata;
    sys: Sys;
    fields: TestimonialVideoFields;
  }
  
  export interface UiTestimonialFields {
    title: string;
    videos: TestimonialVideoEntry[];
  }
  
  export interface UiTestimonialEntry {
    metadata: Metadata;
    sys: Sys;
    fields: UiTestimonialFields;
  }

  // Interfaz para los campos de un enlace
export interface LinkFields {
  text: string;
  value: string;
}

// Interfaz para una entrada de tipo enlace
export interface LinkEntry {
  metadata: Metadata;
  sys: Sys;
  fields: LinkFields;
}

// Interfaz para los campos del componente UI Hero
export interface UiHeroFields {
  title: string;
  titleDown: string;
  description: string;
  label: string;
  link: LinkEntry;
  animation: string;
}

// Interfaz para una entrada de tipo UI Hero
export interface UiHeroEntry {
  metadata: Metadata;
  sys: Sys;
  fields: UiHeroFields;
}

// Interfaz para los campos del componente UI CTA
export interface UiCtaFields {
  title: string;
  titleDown?: string;
  description: string;
  callToAction: LinkEntry;
  label:string;
}

// Interfaz para una entrada de tipo UI CTA
export interface UiCtaEntry {
  metadata: Metadata;
  sys: Sys;
  fields: UiCtaFields;
}

// Interfaz para los campos de una pregunta y respuesta (QA)
export interface QaFields {
  question: string;
  answer: string;
}

// Interfaz para una entrada de tipo QA
export interface QaEntry {
  metadata: Metadata;
  sys: Sys;
  fields: QaFields;
}

// Interfaz para los campos del componente UI QA
export interface UiQaFields {
  title: string;
  items: QaEntry[];
}

// Interfaz para una entrada de tipo UI QA
export interface UiQaEntry {
  metadata: Metadata;
  sys: Sys;
  fields: UiQaFields;
}

// Interfaz para los campos de un servicio individual
export interface ServiceFields {
  title: string;
  description: string;
  image: Asset; // Usando la interfaz Asset que ya tienes
}

// Interfaz para una entrada de tipo servicio
export interface ServiceEntry {
  metadata: Metadata;
  sys: Sys;
  fields: ServiceFields;
}

// Interfaz para los campos del componente UI Services
export interface UiServicesFields {
  title: string;
  services: ServiceEntry[];
  callToAction?: LinkEntry; // Opcional, dependiendo de si siempre está presente
}

// Interfaz para una entrada de tipo UI Services
export interface UiServicesEntry {
  metadata: Metadata;
  sys: Sys;
  fields: UiServicesFields;
}

export interface SocialLinkFields {
  text: string;
  value: string;
  image: Asset; // Utiliza la interfaz Asset existente
}

export interface SocialLinkEntry {
  metadata: Metadata;
  sys: Sys;
  fields: SocialLinkFields;
}

export interface MenuLinkFields {
  text: string;
  value: string;
}

export interface MenuLinkEntry {
  metadata: Metadata;
  sys: Sys;
  fields: MenuLinkFields;
}

export interface MenuFields {
  title: string;
  links: MenuLinkEntry[];
}

export interface MenuEntry {
  metadata: Metadata;
  sys: Sys;
  fields: MenuFields;
}

export interface SeoFields {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: Asset;
  favicon: Asset;

}

export interface SeoEntry {
  metadata: Metadata;
  sys: Sys;
  fields: SeoFields;
}

export interface FooterData {
  title: string;
  description: string;
  socialLinks: SocialLinkEntry[];
  menu: MenuEntry[];
}
// Actualizar la interfaz HomepageData para incluir los nuevos tipos de componentes
export interface HomepageData {
  title: string;
  slug: string;
  seo: SeoEntry;
  components: (UiHeroEntry | UiTestimonialEntry | UiCtaEntry | UiQaEntry | UiServicesEntry)[];
}

