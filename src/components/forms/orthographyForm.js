import React from 'react'

class OrthographyForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            symbolsList: []
        }
    }

    componentDidUpdate() {
        if (this.state.symbolsList.length < this.props.symbolsList.length) {
            const newItem = this.props.symbolsList.find(symbol => !this.state.symbolsList.find(sym => sym.name === symbol))
            this.setState({
                symbolsList: [...this.state.symbolsList, {name: newItem, description: ''}]
            })
        } else if (this.state.symbolsList.length > this.props.symbolsList.length) {
            const itemToRemove = this.state.symbolsList.find(symbol => !this.props.symbolsList.includes(symbol.name))
            this.setState({
                symbolsList: this.state.symbolsList.filter(symbol => symbol.name !== itemToRemove.name)
            })
        }
    }

    render() {
        return (
            <>
                <h2>Orthography</h2>
                {!this.props.printerMode ? <p>If you care to, add transliterations for the phonemes in your inventory here</p> : ''}
                {!this.props.printerMode ? <ul>
                    {this.state.symbolsList.map(symbol => {
                        return <li className="my-2" key={symbol.name}>
                            <label className="mx-2" htmlFor={symbol.name + '_ortho'}>{symbol.name}</label>
                            <input
                                id={symbol.name + '_ortho'}
                                value={symbol.description}
                                type="text"
                                onChange={e => {
                                    const desc = e?.currentTarget?.value
                                    const newSymList = this.state.symbolsList
                                    const targetItem = newSymList.find(sym => sym.name === symbol.name)
                                    if (targetItem) {
                                        targetItem.description = desc
                                        this.setState({
                                            symbolsList: newSymList
                                        })
                                    }
                                }}
                            />
                        </li>
                    })}
                </ul> : <table className="table">
                    <thead>
                        <tr>
                            <th role="col">Symbol</th>
                            <th role="col">Transliteration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.symbolsList.map(symbol => {
                            return <tr key={symbol.name + '_ortho'}>
                                <th role="row">{symbol.name}</th>
                                <td>{symbol.description || '-'}</td>
                            </tr>
                        })}
                    </tbody>
                </table>}
            </>
        )
    }
}

export default OrthographyForm
