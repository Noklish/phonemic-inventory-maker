import React from 'react'
import PhonemeCell from '../common/phonemeCell'
import * as pulmonicLists from '../../utils/constants/Pulmonics'

const PulmonicChart = props => {
    console.log(pulmonicLists)
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
                        {Object.keys(pulmonicLists)?.map(key => {
                            const list = pulmonicLists[key]
                            return <tr>
                                <th role="row">{list.name}</th>
                                {list.list?.map(cell => {
                                    return cell.width ? <PhonemeCell {...props} phonemeLeft={cell.left} phonemeRight={cell.right} colSpan={cell.width} /> : null
                                })}
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default PulmonicChart
