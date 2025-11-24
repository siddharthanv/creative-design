export interface ContactInfo {
  PHONE: string;
  PHONE_INT: string;
  PHONE_DIAL: string;
  EMAIL: string;
  LOCATION: string;
  ADDRESS_FULL: string;
  BUSINESS_HOURS: string;
}

export interface SocialLinks {
  INSTAGRAM: string;
  FACEBOOK: string;
  YOUTUBE: string;
  WHATSAPP: string;
  EMAIL_LINK: string;
}

export interface BrandingInfo {
  TAGLINE: string;
  SHORT_ABOUT: string;
}

export interface WebsiteInfo {
  BASE_URL: string;
}

export interface SiteConfig {
  COMPANY_NAME: string;
  CONTACT: ContactInfo;
  SOCIAL: SocialLinks;
  BRANDING: BrandingInfo;
  SERVICES: string[];
}
