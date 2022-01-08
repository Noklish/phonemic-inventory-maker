import React, { useState } from 'react'
import PhonemeCell from '../common/phonemeCell'

const AffricatesChart = props => {
    const [customAffricates, setCustomAffricates] = useState([])
    const [newSym, setNewSym] = useState('')
    const [newLab, setNewLab] = useState('')

    return (
        <div className="table-responsive">
            <table className={`table d-print-table align-middle ${!props.printerMode && 'table-bordered'}`}>
                <thead>
                    <tr>
                        <th role="col" className="text-center">Affricates</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={props.printerMode && !props.activeList.includes("t͡s") && 'no-print'}>
                        <PhonemeCell {...props} phonemeLeft="t͡s" label="Voiceless alveolar affricate" />
                    </tr>
                    <tr className={props.printerMode && !props.activeList.includes("t͡ʃ") && 'no-print'}>
                        <PhonemeCell {...props} phonemeLeft="t͡ʃ" label="Voiceless palato-alveolar affricate" />
                    </tr>
                    <tr className={props.printerMode && !props.activeList.includes("t͡ɕ") && 'no-print'}>
                        <PhonemeCell {...props} phonemeLeft="t͡ɕ" label="Voiceless alveolo-palatal affricate" />
                    </tr>
                    <tr className={props.printerMode && !props.activeList.includes("ʈ͡ʂ") && 'no-print'}>
                        <PhonemeCell {...props} phonemeLeft="ʈ͡ʂ" label="Voiceless retroflex affricate" />
                    </tr>
                    <tr className={props.printerMode && !props.activeList.includes("d͡z") && 'no-print'}>
                        <PhonemeCell {...props} phonemeLeft="d͡z" label="Voiced alveolar affricate" />
                    </tr>
                    <tr className={props.printerMode && !props.activeList.includes("d͡ʒ") && 'no-print'}>
                        <PhonemeCell {...props} phonemeLeft="d͡ʒ" label="Voiced post-alveolar affricate" />
                    </tr>
                    <tr className={props.printerMode && !props.activeList.includes("d͡ʑ") && 'no-print'}>
                        <PhonemeCell {...props} phonemeLeft="d͡ʑ" label="Voiced alveolo-palatal affricate" />
                    </tr>
                    <tr className={props.printerMode && !props.activeList.includes("ɖ͡ʐ") && 'no-print'}>
                        <PhonemeCell {...props} phonemeLeft="ɖ͡ʐ" label="Voiceless retroflex affricate" />
                    </tr>
                    {!!customAffricates.length && customAffricates.map(affricate => {
                        return <tr>
                            <PhonemeCell {...props} phonemeLeft={affricate.name} label={affricate.label} />
                        </tr>
                    })}
                    {!props.printerMode && <tr>
                        <td className="no-print">
                            <div className="input-group my-1">
                                <span className="input-group-text">Symbol</span>
                                <input className="form-control" onChange={e => setNewSym(e.target.value)} />
                            </div>
                            <div className="input-group my-1">
                                <span className="input-group-text">Label</span>
                                <input className="form-control" onChange={e => setNewLab(e.target.value)} />
                            </div>
                            <button type="button" className="btn btn-sm btn-success w-100 mb-1" onClick={() => setCustomAffricates([...customAffricates, {name: newSym, label: newLab}])}>+</button>
                        </td>
                    </tr>}
                </tbody>
            </table>
        </div>
    )
}

export default AffricatesChart
