import NorwayFlag from "../assets/icons/norway-icon.svg"

console.log(NorwayFlag);


export const languages = {
  en: 'EN',
  de: 'DE',
  no: 'NO'
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.pageName':'Julians Stories',
    'nav.traditionalStories':'Traditional Fairytails',
    'nav.whoIsJulian':'Who is Julian?',
    'nav.blog':'Blog',
    'nav.button':'Search Fairytails',
    'home.title':'Fresh stories each week',
    'home.subTitle':'Completely free for you and your kids',
    'home.callToActionButton':'Subscribe to Julians Bedtimes Tales',
    'stories.summary': 'Summary',
    'stories.author': 'Created by',
    'stories.readTime': 'Read Time',
    'footer.traditionalFairytales': 'Traditional Fairytales',
    'footer.detectiveStories': 'Detective Stories',
    'footer.discoveries': 'DISCOVERIES',


  },
  de: {
    'nav.pageName':'Julians Geschichten',
    'nav.traditionalStories':'Traditionelle Märchen ',
    'nav.whoIsJulian':'Wer ist Julian?',
    'nav.blog':'Blog',
    'nav.button':'Geschichten Suche',
    'home.title':'Wöchentlich neue Geschichten',
    'home.subTitle':'Kostenlos für dich und deine Familie',
    'home.callToActionButton':'Abonniere Julians Gutenachtgeschichten',
    'stories.summary': 'Zusammenfassung',
    'stories.author': 'Von',
    'stories.readTime': 'Lese Dauer',
    'footer.traditionalFairytales': 'Traditionelle Märchen',
    'footer.detectiveStories': 'Detektivgeschichten',
    'footer.discoveries': 'ENTDECKUNGEN'


  },
  no:{
    'nav.pageName':'Julians Historier',
    'nav.traditionalStories':'Tradisjonelle eventyr',
    'nav.whoIsJulian':'Hvem er Julian?',
    'nav.blog':'Blog',
    'nav.button':'Eventyr Søk',
    'home.title':'Hver uke nye historier',
    'home.subTitle':'Gratis for deg og dine barn',
    'home.callToActionButton':'Få Julians godnatthistorier rett i innboksen din',
    'stories.summary': 'Sammendrag',
    'stories.author': 'Skrevet av',
    'stories.readTime': 'Opplesningstid',
    'footer.traditionalFairytales': 'Tradisjonelle Eventyr',
    'footer.detectiveStories': 'Detektiv historier',
    'footer.discoveries': 'OPPDAGELSER',



  }
} as const;
