import './App.css';
import PulmonicChart from './components/charts/pulmonicChart';
import NonPulmonicChart from './components/charts/nonPulmonicChart';
import OtherSymbolsChart from './components/charts/otherSymbolsChart';
import AffricatesChart from './components/charts/affricatesChart';
import VowelsChart from './components/charts/vowelsChart';
import React from 'react';
import { AFFRICATES, NON_PULMONICS, OTHER_SYMBOLS, PULMONICS, VOWELS } from './utils/constants/listNames';
import OrthographyForm from './components/forms/orthographyForm';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pulmonicsList: [],
      nonPulmonicsList: [],
      otherSymbolsList: [],
      affricatesList: [],
      vowelsList: [],
      printerMode: false,
      title: ''
    }
  }

  addtoList = (targetList, newItem) => {
    this.setState({
      [targetList]: [...this.state?.[targetList], newItem]
    })
  }

  removeFromList = (targetList, itemToRemove) => {
    this.setState({
      [targetList]: this.state?.[targetList].filter(item => item !== itemToRemove)
    })
  }

  render() {
    const { printerMode = false } = this.state

    return (
      <div className="container p-3 text-center">
        {printerMode && <h1>Phonemic Inventory for {this.state.title || 'an unnamed conlang'}</h1>}
        {!printerMode && <>
          <h1>Phonemic Inventory Maker</h1>
          <p>Click on a sound to add it to your inventory</p>
        </>}
        <hr />
        {!printerMode && <div className="w-100 my-3">
          <label htmlFor="title">Give your conlang a name: </label>
          <input className="form-control" style={{marginLeft: '1rem'}} type="text" onChange={e => this.setState({ title: e.currentTarget.value })} value={this.state.title} />
        </div>}
        <PulmonicChart listName={PULMONICS} activeList={this.state.pulmonicsList} addtoList={this.addtoList} removeFromList={this.removeFromList} printerMode={printerMode} />
        <NonPulmonicChart listName={NON_PULMONICS} activeList={this.state.nonPulmonicsList} addtoList={this.addtoList} removeFromList={this.removeFromList} printerMode={printerMode} />
        <div className="row others-n-affricates">
          <div className="col">
            <OtherSymbolsChart listName={OTHER_SYMBOLS} activeList={this.state.otherSymbolsList} addtoList={this.addtoList} removeFromList={this.removeFromList} printerMode={printerMode} />
          </div>
          <div className="col">
            <AffricatesChart listName={AFFRICATES} activeList={this.state.affricatesList} addtoList={this.addtoList} removeFromList={this.removeFromList} printerMode={printerMode} />
          </div>
        </div>
        <VowelsChart listName={VOWELS} activeList={this.state.vowelsList} addtoList={this.addtoList} removeFromList={this.removeFromList} printerMode={printerMode} />
        <hr />
        <OrthographyForm symbolsList={
          [
            ...this.state.pulmonicsList,
            ...this.state.nonPulmonicsList,
            ...this.state.otherSymbolsList,
            ...this.state.affricatesList,
            ...this.state.vowelsList
          ]}
          printerMode={printerMode}
        />
        <button className="btn btn-primary no-print" onClick={() => this.setState({printerMode: !this.state.printerMode})}>{this.state.printerMode ? 'Deprinterize' : 'Printerize'}</button>
      </div>
    );
  }
}

export default App;
