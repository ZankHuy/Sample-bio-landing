export interface SocialLink {
  id: string;
  label: string;
  value: string;
  icon: string;
  url: string;
  color: string;
}

export interface BioBackground {
  type: "gradient" | "solid" | "image";
  colors?: [string, string];
  solidColor?: string;
  image?: string;
}

export interface BioConfig {
  name: string;
  title: string;
  avatar: string;
  background: BioBackground;
  links: SocialLink[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
}

export interface Brand {
  name: string;
  logo: string;
  tagline: string;
}

export interface Hero {
  headline: string;
  subheadline: string;
  cta_text: string;
  cta_scroll_to: string;
}

export interface LeadFormConfig {
  enabled: boolean;
  google_form_url: string;
  field_mapping: {
    name: string;
    phone: string;
    email: string;
    notes: string;
  };
  form_title: string;
  success_message: string;
  submit_button_text: string;
}

export interface FooterConfig {
  copyright: string;
  contact_info: string;
}

export interface LandingConfig {
  brand: Brand;
  hero: Hero;
  services: Service[];
  leadForm: LeadFormConfig;
  footer: FooterConfig;
}

export interface LeadFormData {
  name: string;
  phone: string;
  email: string;
  notes: string;
}
