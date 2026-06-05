export type PrintCategory = 'document' | 'photo';

export type DocumentType = 'bw' | 'color';
export type PhotoSize = 'jumbo' | 'a4';
export type PhotoFinish = 'glossy' | 'matte';

export interface PricingConfig {
  document: {
    bw: number;
    color: number;
  };
  photo: {
    jumbo: number;
    a4: number;
  };
}

export const PRICING: PricingConfig = {
  document: {
    bw: 2,      // R2
    color: 5,   // R5
  },
  photo: {
    jumbo: 15,  // R15
    a4: 40,     // R40
  }
};

export const BUSINESS_INFO = {
  name: 'DubeSOS Printing',
  tagline: 'Professional Printing, Handled Fast',
  whatsapp: '27769766070',
  formattedWhatsApp: '+27 769766070',
  email: 'nhlayisekobennet07@gmail.com',
  location: 'Rhobeni (close to ZCC), Xihoko, Tzaneen, Limpopo',
  hours: {
    weekdays: 'Monday–Friday 08:00–17:00',
    saturday: 'Saturday 10:00–17:00',
    sunday: 'Closed'
  },
  announcement: 'MarketWave — Coming Soon'
};
