import React from 'react'
import PhonemeCell from '../common/phonemeCell'

const PulmonicChart = props => {
    return (
        <>
            <h2 className="mt-3">Pulmonic Consonants</h2>
            <div className="table-responsive">
                <table className={`table align-middle d-print-table ${!props.printerMode && 'table-bordered'}`}>
                    <thead>
                        <tr>
                            <th scope="col"/>
                            <th scope="col">Bilabial</th>
                            <th scope="col">Labio-dental</th>
                            <th scope="col">Dental</th>
                            <th scope="col">Alveolar</th>
                            <th scope="col">Post-Alveolar</th>
                            <th scope="col">Retroflex</th>
                            <th scope="col">Palatal</th>
                            <th scope="col">Velar</th>
                            <th scope="col">Uvular</th>
                            <th scope="col">Pharyngeal</th>
                            <th scope="col">Glottal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Plosive</th>
                            <PhonemeCell {...props} phonemeRight="b" phonemeLeft="p" />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} colSpan="3" phonemeRight="d" phonemeLeft="t" />
                            <PhonemeCell {...props} phonemeRight="ɖ" phonemeLeft="ʈ" />
                            <PhonemeCell {...props} phonemeRight="ɟ" phonemeLeft="c" />
                            <PhonemeCell {...props} phonemeRight="g" phonemeLeft="k" />
                            <PhonemeCell {...props} phonemeLeft="q" phonemeRight="ɢ" />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} phonemeLeft="ʔ" />
                        </tr>
                        <tr>
                            <th scope="row">Nasal</th>
                            <PhonemeCell {...props} phonemeRight="m" />
                            <PhonemeCell {...props} phonemeRight="ɱ" />
                            <PhonemeCell {...props} phonemeRight="n" colSpan="3" />
                            <PhonemeCell {...props} phonemeRight="ɳ" />
                            <PhonemeCell {...props} phonemeRight="ɲ" />
                            <PhonemeCell {...props} phonemeRight="ŋ" />
                            <PhonemeCell {...props} phonemeRight="ɴ" />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                        </tr>
                        <tr>
                            <th scope="row">Trill</th>
                            <PhonemeCell {...props} phonemeRight="ʙ" />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} phonemeRight="r" colSpan="2" />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} phonemeRight="ʀ" />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                        </tr>
                        <tr>
                            <th scope="row">Tap or Flap</th>
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} phonemeRight="ⱱ" />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} phonemeRight="ɾ" colSpan="2" />
                            <PhonemeCell {...props} phonemeRight="ɽ" />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                        </tr>
                        <tr>
                            <th scope="row">Fricative</th>
                            <PhonemeCell {...props} phonemeLeft="ɸ" phonemeRight="β" />
                            <PhonemeCell {...props} phonemeLeft="f" phonemeRight="v" />
                            <PhonemeCell {...props} phonemeLeft="θ" phonemeRight="ð" />
                            <PhonemeCell {...props} phonemeLeft="s" phonemeRight="z" />
                            <PhonemeCell {...props} phonemeLeft="ʃ" phonemeRight="ʒ" />
                            <PhonemeCell {...props} phonemeLeft="ʂ" phonemeRight="ʐ" />
                            <PhonemeCell {...props} phonemeLeft="ç" phonemeRight="ʝ" />
                            <PhonemeCell {...props} phonemeLeft="x" phonemeRight="ɣ" />
                            <PhonemeCell {...props} phonemeLeft="χ" phonemeRight="ʁ" />
                            <PhonemeCell {...props} phonemeLeft="ħ" phonemeRight="ʕ" />
                            <PhonemeCell {...props} phonemeLeft="h" phonemeRight="ɦ" />
                        </tr>
                        <tr>
                            <th scope="row">Lateral Fricative</th>
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} phonemeLeft="ɬ" phonemeRight="ɮ" />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                        </tr>
                        <tr>
                            <th scope="row">Approximant</th>
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} phonemeRight="ʋ" />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} phonemeRight="ɹ" colSpan="2" />
                            <PhonemeCell {...props} phonemeRight="ɻ" />
                            <PhonemeCell {...props} phonemeRight="j" />
                            <PhonemeCell {...props} phonemeRight="ɰ" />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                        </tr>
                        <tr>
                            <th scope="row">Lateral Approximant</th>
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} phonemeRight="l" colSpan="2" />
                            <PhonemeCell {...props} phonemeRight="ɭ" />
                            <PhonemeCell {...props} phonemeRight="ʎ" />
                            <PhonemeCell {...props} phonemeRight="ʟ" />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default PulmonicChart
