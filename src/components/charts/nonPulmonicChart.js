import React from 'react'
import PhonemeCell from '../common/phonemeCell'

const NonPulmonicChart = props => {
    return (
        <>
            {props.printerMode ? <h2>Non-Pulmonic Consonants</h2> : ''}
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
                            <PhonemeCell {...props} label="ʼ etc..." />
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default NonPulmonicChart
