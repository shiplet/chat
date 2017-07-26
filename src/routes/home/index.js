import { h, Component } from 'preact'
import style from './style'

import ChatBox from '../../components/ChatBox';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
                <ChatBox />
			</div>
		);
	}
}
