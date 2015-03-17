import Ember from 'ember';
import StyleBindingsMixin from '../mixins/style-bindings';
import RegisterTableComponentMixin from '../mixins/register-table-component';

// TODO: This should be a mixin
export default Ember.CollectionView.extend(
StyleBindingsMixin, RegisterTableComponentMixin, {
  classNames: ['ember-table-table-block'],
  styleBindings: ['width', 'height'],
  itemViewClass: Ember.computed.alias('tableComponent.tableRowViewClass'),
  columns: null,
  content: null,
  scrollLeft: null,

  onScrollLeftDidChange: Ember.observer(function() {
    return this.$().scrollLeft(this.get('scrollLeft'));
  }, 'scrollLeft'),

  height: Ember.computed(function() {
    return this.get('tableComponent._headerHeight');
  }).property('tableComponent._headerHeight')
});
