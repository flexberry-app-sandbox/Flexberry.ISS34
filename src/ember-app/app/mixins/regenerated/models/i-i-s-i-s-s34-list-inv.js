import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  investment: DS.belongsTo('i-i-s-i-s-s34-investment', { inverse: null, async: false }),
  support: DS.belongsTo('i-i-s-i-s-s34-support', { inverse: 'listInv', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-i-s-s34-list-inv.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  investment: {
    descriptionKey: 'models.i-i-s-i-s-s34-list-inv.validations.investment.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  support: {
    descriptionKey: 'models.i-i-s-i-s-s34-list-inv.validations.support.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ListInvE', 'i-i-s-i-s-s34-list-inv', {
    name: attr('Name', { index: 0 })
  });
};
