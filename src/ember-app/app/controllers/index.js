import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.i-s-s34.caption'),
          title: i18n.t('forms.application.sitemap.i-s-s34.title'),
          children: [{
            link: 'i-i-s-i-s-s34-size-l',
            caption: i18n.t('forms.application.sitemap.i-s-s34.i-i-s-i-s-s34-size-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s34.i-i-s-i-s-s34-size-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-i-s-s34-investment-l',
            caption: i18n.t('forms.application.sitemap.i-s-s34.i-i-s-i-s-s34-investment-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s34.i-i-s-i-s-s34-investment-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-i-s-s34-support-l',
            caption: i18n.t('forms.application.sitemap.i-s-s34.i-i-s-i-s-s34-support-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s34.i-i-s-i-s-s34-support-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-i-s-s34-form-l',
            caption: i18n.t('forms.application.sitemap.i-s-s34.i-i-s-i-s-s34-form-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s34.i-i-s-i-s-s34-form-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})