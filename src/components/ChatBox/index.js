import { h, Component } from 'preact'
import style from './style'

import TypeText from '../TypeText'

export default class ChatBox extends Component {
    render() {
        return (
            <section class={style.section}>
                <TypeText text={'Hello, this is where Paige & Ship like to chat.'} prefix={ '$ ' } speed={ 60 } delay={ 500 }/>
            </section>
        );
    }
}
