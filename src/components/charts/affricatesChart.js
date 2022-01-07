import React from 'react'
import PhonemeCell from '../common/phonemeCell'

const AffricatesChart = props => {
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
                </tbody>
            </table>
        </div>
    )
}

export default AffricatesChart
