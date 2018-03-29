import Component from '@ember/component';
import layout from '../templates/components/ui-breadcrumbs-menu-trigger';
import { Styled, group } from '../lib/ui-components';

export default Component.extend(Styled, {
  layout,
  tagName: 'span',
  styles: {
    base: 'bb-dashed bb--light-blue bb-dashed-hover bb-w1 p-b-4'
  }
});
