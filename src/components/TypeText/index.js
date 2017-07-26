import { h, Component } from 'preact'
import style from './style'

export default class TypeText extends Component {

    componentDidMount() {
        let count = 0
        setTimeout(()=>{
            // TODO: create event-based system for beginning and ending
            this.el.children.forEach(v => {
                count++
                setTimeout(()=>{
                    v.classList.add(style.visible)
                }, this.props.speed * count)
            })
        }, this.props.delay)
    }

    render() {
        return (
            <div>
                {this.props.prefix && <span class={style.prefix}>{this.props.prefix}</span>}
                <span ref={v => this.el = v}>
                {this.props.text.split('').map(v => <span class={style.hidden}>{v}</span>)}
                </span>
            </div>
        );
    }
}
