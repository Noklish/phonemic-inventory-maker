import React, { useState } from 'react'
import PhonemeCell from '../common/phonemeCell'

const NonPulmonicChart = props => {
    const [customEjectives, setCustomEjectives] = useState([])
    const [newSym, setNewSym] = useState('')
    const [newLab, setNewLab] = useState('')

    const renderForm = () => {
        return <td className="no-print">
            <div className="input-group my-1">
                <span className="input-group-text">Symbol</span>
                <input className="form-control" onChange={e => setNewSym(e.target.value)} />
            </div>
            <div className="input-group my-1">
                <span className="input-group-text">Label</span>
                <input className="form-control" onChange={e => setNewLab(e.target.value)} />
            </div>
            <button type="button" className="btn btn-sm btn-success w-100 mb-1" onClick={() => setCustomEjectives([...customEjectives, {name: newSym, label: newLab}])}>+</button>
        </td>
    }

    return (
        <>
            <h2 className="mt-3">Non-Pulmonic Consonants</h2>
            <div className="table-responsive">
                <table className={`table align-middle d-print-table ${!props.printerMode && 'table-bordered'}`}>
                    <thead>
                        <tr>
                            <th className="text-center" scope="col">Clicks</th>
                            <th className="text-center" scope="col">Voiced Implosives</th>
                            <th className="text-center" scope="col">Ejectives</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <PhonemeCell {...props} phonemeLeft="ʘ" label="Bilabial" />
                            <PhonemeCell {...props} phonemeLeft="ɓ" label="Bilabial" />
                            <PhonemeCell {...props} phonemeLeft="pʼ " label="Bilabial" />
                        </tr>
                        <tr>
                            <PhonemeCell {...props} phonemeLeft="ǀ" label="Dental" />
                            <PhonemeCell {...props} phonemeLeft="ɗ" label="Dental/Alveolar" />
                            <PhonemeCell {...props} phonemeLeft="tʼ " label="Dental/Alveolar" />
                        </tr>
                        <tr>
                            <PhonemeCell {...props} phonemeLeft="ǃ" label="(Post)alveolar" />
                            <PhonemeCell {...props} phonemeLeft="ʄ" label="Palatal" />
                            <PhonemeCell {...props} phonemeLeft="kʼ " label="Velar" />
                        </tr>
                        <tr>
                            <PhonemeCell {...props} phonemeLeft="ǂ" label="Palatoalveolar" />
                            <PhonemeCell {...props} phonemeLeft="ɠ" label="Velar" />
                            <PhonemeCell {...props} phonemeLeft="sʼ " label="Alveolar Fricative" />
                        </tr>
                        <tr>
                            <PhonemeCell {...props} phonemeLeft="ǁ" label="Alveolar Lateral" />
                            <PhonemeCell {...props} phonemeLeft="ʛ" label="Uvular" />
                            {!!customEjectives.length && <PhonemeCell {...props} phonemeLeft={customEjectives[0].name} label={customEjectives[0].label} />}
                            {!customEjectives.length && !props.printerMode && renderForm()}
                        </tr>
                        {!!customEjectives.length && <tr>
                            <PhonemeCell />
                            <PhonemeCell />
                            {!props.printerMode && renderForm()}
                        </tr>}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default NonPulmonicChart
