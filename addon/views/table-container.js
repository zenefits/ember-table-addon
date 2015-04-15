import Ember from 'ember';
import StyleBindingsMixin from 'ember-table/mixins/style-bindings';

export default Ember.View.extend(
StyleBindingsMixin, {
  classNames: ['et-table-container'],
  styleBindings: ['height', 'width']
});
