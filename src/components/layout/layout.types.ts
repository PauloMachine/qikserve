export interface IWebSettings {
  id?: number;
  venueId?: number;
  bannerImage: string;
  backgroundColour: string;
  primaryColour: string;
  primaryColourHover: string;
  navBackgroundColour: string;
}

export interface ITheme {
  locale: string;
  ccy: string;
  webSettings: IWebSettings;
}
