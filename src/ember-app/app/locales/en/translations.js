import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISISS34FormLForm from './forms/i-i-s-i-s-s34-form-l';
import IISISS34InvestmentLForm from './forms/i-i-s-i-s-s34-investment-l';
import IISISS34SizeLForm from './forms/i-i-s-i-s-s34-size-l';
import IISISS34SupportLForm from './forms/i-i-s-i-s-s34-support-l';
import IISISS34FormEForm from './forms/i-i-s-i-s-s34-form-e';
import IISISS34InvestmentEForm from './forms/i-i-s-i-s-s34-investment-e';
import IISISS34SizeEForm from './forms/i-i-s-i-s-s34-size-e';
import IISISS34SupportEForm from './forms/i-i-s-i-s-s34-support-e';
import IISISS34FormModel from './models/i-i-s-i-s-s34-form';
import IISISS34InvestmentModel from './models/i-i-s-i-s-s34-investment';
import IISISS34ListInvModel from './models/i-i-s-i-s-s34-list-inv';
import IISISS34ListSizeModel from './models/i-i-s-i-s-s34-list-size';
import IISISS34SizeModel from './models/i-i-s-i-s-s34-size';
import IISISS34SupportModel from './models/i-i-s-i-s-s34-support';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-i-s-s34-form': IISISS34FormModel,
    'i-i-s-i-s-s34-investment': IISISS34InvestmentModel,
    'i-i-s-i-s-s34-list-inv': IISISS34ListInvModel,
    'i-i-s-i-s-s34-list-size': IISISS34ListSizeModel,
    'i-i-s-i-s-s34-size': IISISS34SizeModel,
    'i-i-s-i-s-s34-support': IISISS34SupportModel
  },

  'application-name': 'I s s34',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'I s s34',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s34',
          title: 'I s s34'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'i-s-s34': {
          caption: 'ISS34',
          title: 'ISS34',
          'i-i-s-i-s-s34-size-l': {
            caption: 'Size',
            title: ''
          },
          'i-i-s-i-s-s34-investment-l': {
            caption: 'Investment',
            title: ''
          },
          'i-i-s-i-s-s34-support-l': {
            caption: 'Support',
            title: ''
          },
          'i-i-s-i-s-s34-form-l': {
            caption: 'Форм',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-i-s-s34-form-l': IISISS34FormLForm,
    'i-i-s-i-s-s34-investment-l': IISISS34InvestmentLForm,
    'i-i-s-i-s-s34-size-l': IISISS34SizeLForm,
    'i-i-s-i-s-s34-support-l': IISISS34SupportLForm,
    'i-i-s-i-s-s34-form-e': IISISS34FormEForm,
    'i-i-s-i-s-s34-investment-e': IISISS34InvestmentEForm,
    'i-i-s-i-s-s34-size-e': IISISS34SizeEForm,
    'i-i-s-i-s-s34-support-e': IISISS34SupportEForm
  },

});

export default translations;
