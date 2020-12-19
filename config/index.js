import { Platform } from 'react-native';

const config = {
  API_ENDPOINTS: {
    MAIN: 'https://quinielasrd.com/mobile-api-new',
    APP: 'https://quinielasrd.com/mobile-api-new'
  },

  // ADMOB
  ADMOB: {
    REWARDED_MAX: 4,
    SECRETS: Platform.select({
      ios: {
        BANNER: 'ca-app-pub-1196303242456869/2014042034',
        INTERSTITIAL: 'ca-app-pub-1196303242456869/4967508435'
      },
      android: {
        BANNER: 'ca-app-pub-1196303242456869/3630376038',
        INTERSTITIAL: 'ca-app-pub-1196303242456869/5107109235'
      }
    })
  },

  SETTINGS: {
    ENCRYPT: true,
    REFRESH_INTERVAL: 30000,
    APP_NAME: 'app_qrd'
  },

  VIEW_OPTIONS: {
    THEME: 'dark',
    INITIAL_MENU: {
      ID: 'home',
      OPTIONS: {
        toggle: true,
        trigger: true
      }
    },
    MENUS: {
      SHOW_COMPANIES: true,
      SHOW_POOLS: true,
      SHOW_STATS: true
    },
    LAYOUTS: {
      LOGO_ASPECT_RATIO: 247 / 110,
      SHOW_ALL_GAMES_AT_COMPANY: true,
      BREED_CRUMB_COMPANY_DISTINCTION: true,
      MENU_PRIMARY_DISTINCTION: true
    },
    NAVIGATIONS: {
      SHOW_TITLE: false
    }
  },
  ENUMS: {
    SCREEN_TYPE: {
      HOME: 1,
      MENU: 2,
      COMPANY: 3,
      GAME: 4,
      STAT_PREVIOUS_YEARS: 5,
      STAT_HOT_NUMBERS: 6,
      STAT_COLD_NUMBERS: 7,
      STAT_FORECASTS: 8,
      STAT_CHECK_NUMBERS: 9
    },
    MENU_TYPE: {
      PRIMARY: 1,
      COMPANY: 2,
      GAME: 3,
      STAT: 4
    }
  },

  VARIABLES: {
    app: null
  }
};

export default config;
