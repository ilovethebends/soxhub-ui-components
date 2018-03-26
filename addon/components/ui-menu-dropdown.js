import Component from '@ember/component';
import layout from '../templates/components/ui-menu-dropdown';
import { Styled, group } from '../lib/ui-components';

export default Component.extend(Styled, {
  layout,
  tagName: 'ul',
  styles: {
    base: 'p-t-10 p-b-10 p-l-0 p-r-0 ba txt-12 b--light-gray shadow-1 br2 w160px'
  }
});
