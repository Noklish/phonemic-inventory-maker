import React from 'react'

class OrthographyForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            symbolsList: [],
            syllableType: ''
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
                {!this.props.printerMode ? <div className="row">
                    <ul className="col-8">
                        {this.state.symbolsList.map(symbol => {
                            return <li className="my-2" key={symbol.name}>
                                <div className="input-group">
                                    <span className="input-group-text col-1">{symbol.name}</span>
                                    <input
                                        className="form-control"
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
                                    </div>
                            </li>
                        })}
                    </ul>
                    <div className="col-3">
                        <label htmlFor="syllable-type">Syllable type:</label>
                        <input id="syllable-type" type="text" className="form-control" onChange={e => this.setState({ syllableType: e.target.value })} />
                    </div>
                </div> : <div className="row">
                    <div className="col-8">
                        <table className="table">
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
                        </table>
                    </div>
                    <div className="col-3 fw-bold">
                        Syllable Type: {this.state.syllableType}
                    </div>
                </div>}
            </>
        )
    }
}

export default OrthographyForm
