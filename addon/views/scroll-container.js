import Ember from 'ember';
import StyleBindingsMixin from '../mixins/style-bindings';
import RegisterTableComponentMixin from '../mixins/register-table-component';

export default Ember.View.extend(
StyleBindingsMixin, Ember.ScrollHandlerMixin, RegisterTableComponentMixin, {
  templateName: 'scroll-container',
  classNames: ['ember-table-scroll-container'],
  styleBindings: ['left', 'width', 'height'],
  scrollElementSelector: '.antiscroll-inner',
  width: Ember.computed.alias('tableComponent._scrollContainerWidth'),
  // 10 is the height of the horizontal scrollbar
  height: 10,
  left: Ember.computed.alias('tableComponent._fixedColumnsWidth'),
  scrollTop: Ember.computed.alias('tableComponent._tableScrollTop'),
  scrollLeft: Ember.computed.alias('tableComponent._tableScrollLeft'),

  // HACK: onScrollLeftDidChange will not fire unless scrollLeft has been get
  // at least once. Therefore, we want to call onScrollLeftDidChange in
  // didInsertElement
  didInsertElement: function() {
    this._super();
    this.onScrollLeftDidChange();
  },

  // `event` here is a jQuery event
  onScroll: function(event) {
    this.set('scrollLeft', event.target.scrollLeft);
    event.preventDefault();
  },

  onScrollLeftDidChange: Ember.observer(function() {
    var selector = this.get('scrollElementSelector');
    this.$(selector).scrollLeft(this.get('scrollLeft'));
  }, 'scrollLeft', 'scrollElementSelector')
});
