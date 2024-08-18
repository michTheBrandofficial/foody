import { render } from 'nixix/dom';
import View from './view';

/* @module-refresh */
const root = document.querySelector('body');
const Mount = () => {
	render(() => <View />,root!, {
		commentForLF: false
	});
};

Mount();
export default Mount;