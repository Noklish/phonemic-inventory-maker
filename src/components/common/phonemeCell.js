import React from 'react'

class PhonemeCell extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            phonemeRight: props.phonemeRight,
            phonemeLeft: props.phonemeLeft
        }
    }

    render() {
        const { state, props } = this
        const { addtoList = () => {}, removeFromList = () => {}, printerMode } = props
        const isEmpty = !state.phonemeRight?.name && !state.phonemeLeft?.name

        return(
            <td className={`p-1 ${isEmpty && 'table-secondary'}`} style={{cursor: 'pointer'}} colSpan={props.colSpan || 1}>
                {!isEmpty && <div className="row">
                    {state.phonemeLeft?.name && <div
                        className={`col ${state.phonemeRight?.name || props.label ? 'text-end' : 'text-center'} ${!state.phonemeLeft?.active ? 'text-muted' : 'fw-bold'}`}
                        onClick={() => {
                            this.setState({phonemeLeft: { ...state.phonemeLeft, active: !this.state.phonemeLeft?.active }}, () => {
                                this.state.phonemeLeft?.active ? addtoList(`${props.listName}List`, this.state.phonemeLeft?.name) : removeFromList(`${props.listName}List`, this.state.phonemeLeft?.name)
                            })
                        }}
                    >
                        {printerMode ? state.phonemeLeft?.active ? state.phonemeLeft?.name : '' : state.phonemeLeft?.name}
                    </div>}
                    {state.phonemeRight?.name && <div className={`col ${state.phonemeLeft?.name ? 'text-start' : 'text-center'} ${!state.phonemeRight?.active ? 'text-muted' : 'fw-bold'}`}
                        onClick={() => {
                            this.setState({phonemeRight: { ...state.phonemeRight, active: !this.state.phonemeRight?.active }}, () => {
                                this.state.phonemeRight?.active ? addtoList(`${props.listName}List`, this.state.phonemeRight?.name) : removeFromList(`${props.listName}List`, this.state.phonemeRight?.name)
                            })
                        }}
                    >
                        {printerMode ? state.phonemeRight?.active ? state.phonemeRight?.name : '' : state.phonemeRight?.name}
                    </div>}
                    {props.label && !(props.printerMode && !state.phonemeLeft?.active) && <span className="col text-start">{props.label}</span>}
                </div>}
            </td>
        )
    }
}

export default PhonemeCell
