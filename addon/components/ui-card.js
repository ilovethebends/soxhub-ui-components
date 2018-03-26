import Component from '@ember/component';
import { Styled, group } from '../lib/ui-components';

export default Component.extend(Styled, {
  styles: {
    base: 'test',

    defaultStyle: '',

    colors: group({
      white: 'bg-white',
      red: 'bg-red-light',
    })
  }
});
