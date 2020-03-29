import React from 'react';
import style from './Component.module.scss';

export class InputContainer extends React.Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
        this.valuePlaceholder = this.valuePlaceholder.bind(this);
        this.handler = this.handler.bind(this)
    }

    componentDidMount(){
        this.input.current.focus()
    }
    componentDidUpdate() {
        this.input.current.focus();
    }

    valuePlaceholder() {
        return this.props.isDisabled ? '.' : '...';
    }

    handler(e) {
        e.preventDefault();
        this.props.onSubmit(this.props.id, this.props.value);
        this.props.restore();
    }

    render() {
        const {id, value, onChange} = this.props;

        return (
            <div className={style.inputContainer}>
                <form onSubmit={e => this.handler(e)}>
                    <input
                        className={style.input}
                        onChange={e => onChange(id,  e.target.value)}
                        value={value}
                        ref={this.input}
                        tabIndex="0"
                        placeholder={this.valuePlaceholder()}
                        disabled={this.props.isDisabled}
                    />
                </form>
            </div>
        )
    }
}
