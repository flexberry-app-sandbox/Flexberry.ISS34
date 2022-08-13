import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-i-s-s34-form-l');
  this.route('i-i-s-i-s-s34-form-e',
  { path: 'i-i-s-i-s-s34-form-e/:id' });
  this.route('i-i-s-i-s-s34-form-e.new',
  { path: 'i-i-s-i-s-s34-form-e/new' });
  this.route('i-i-s-i-s-s34-investment-l');
  this.route('i-i-s-i-s-s34-investment-e',
  { path: 'i-i-s-i-s-s34-investment-e/:id' });
  this.route('i-i-s-i-s-s34-investment-e.new',
  { path: 'i-i-s-i-s-s34-investment-e/new' });
  this.route('i-i-s-i-s-s34-size-l');
  this.route('i-i-s-i-s-s34-size-e',
  { path: 'i-i-s-i-s-s34-size-e/:id' });
  this.route('i-i-s-i-s-s34-size-e.new',
  { path: 'i-i-s-i-s-s34-size-e/new' });
  this.route('i-i-s-i-s-s34-support-l');
  this.route('i-i-s-i-s-s34-support-e',
  { path: 'i-i-s-i-s-s34-support-e/:id' });
  this.route('i-i-s-i-s-s34-support-e.new',
  { path: 'i-i-s-i-s-s34-support-e/new' });
});

export default Router;
