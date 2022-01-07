import React from 'react'
import PhonemeCell from '../common/phonemeCell'

const OtherSymbolsChart = props => {
    return (
        <div className="table-responsive">
            <table className={`table d-print-table align-middle ${!props.printerMode && 'table-bordered'}`}>
                <thead>
                    <tr>
                        <th role="col" className="text-center">Other Symbols</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={props.printerMode && !props.activeList.includes("ʍ") && 'no-print'}>
                        <PhonemeCell {...props} phonemeLeft="ʍ" label="Voiceless labial-velar fricative" />
                    </tr>
                    <tr className={props.printerMode && !props.activeList.includes("w") && 'no-print'}>
                        <PhonemeCell {...props} phonemeLeft="w" label="Voiced labial-velar approximant" />
                    </tr>
                    <tr className={props.printerMode && !props.activeList.includes("ɥ") && 'no-print'}>
                        <PhonemeCell {...props} phonemeLeft="ɥ" label="Voiced labial-palatal approximant" />
                    </tr>
                    <tr className={props.printerMode && !props.activeList.includes("ʜ") && 'no-print'}>
                        <PhonemeCell {...props} phonemeLeft="ʜ" label="Voiceless epiglottal fricative" />
                    </tr>
                    <tr className={props.printerMode && !props.activeList.includes("ʢ") && 'no-print'}>
                        <PhonemeCell {...props} phonemeLeft="ʢ" label="Voiced epiglottal fricative" />
                    </tr>
                    <tr className={props.printerMode && !props.activeList.includes("ʡ") && 'no-print'}>
                        <PhonemeCell {...props} phonemeLeft="ʡ" label="Epiglottal plosive" />
                    </tr>
                    <tr className={props.printerMode && !props.activeList.includes("ɕ") && 'no-print'}>
                        <PhonemeCell {...props} phonemeLeft="ɕ" label="Voiceless alveolo-palatal fricative" />
                    </tr>
                    <tr className={props.printerMode && !props.activeList.includes("ʑ") && 'no-print'}>
                        <PhonemeCell {...props} phonemeLeft="ʑ" label="Voiced alveolo-palatal fricative" />
                    </tr>
                    <tr className={props.printerMode && !props.activeList.includes("ɺ") && 'no-print'}>
                        <PhonemeCell {...props} phonemeLeft="ɺ" label="Alveolar lateral flap" />
                    </tr>
                    <tr className={props.printerMode && !props.activeList.includes("ɧ") && 'no-print'}>
                        <PhonemeCell {...props} phonemeLeft="ɧ" label="Simultaneous ʃ and x" />
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default OtherSymbolsChart
