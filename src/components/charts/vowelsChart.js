import React from 'react'
import PhonemeCell from '../common/phonemeCell'

const VowelsChart = props => {
    return (
        <>
            {props.printerMode ? <h2>Vowels</h2> : ''}
            <div className="table-responsive">
                <table className={`table d-print-table align-middle ${!props.printerMode && 'table-bordered'}`}>
                    <thead>
                        <tr>
                            <th />
                            <th role="col">Front Unrounded</th>
                            <th role="col">Front Rounded</th>
                            <th role="col">Central Unrounded</th>
                            <th role="col">Central Rounded</th>
                            <th role="col">Back Unrounded</th>
                            <th role="col">Back Rounded</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th role="row">High</th>
                            <PhonemeCell {...props} phonemeLeft="i" />
                            <PhonemeCell {...props} phonemeLeft="y" />
                            <PhonemeCell {...props} phonemeLeft="ɨ" />
                            <PhonemeCell {...props} phonemeLeft="ʉ" />
                            <PhonemeCell {...props} phonemeLeft="ɯ" />
                            <PhonemeCell {...props} phonemeLeft="u" />
                        </tr>
                        <tr>
                            <th role="row"></th>
                            <PhonemeCell {...props} phonemeLeft="ɪ" />
                            <PhonemeCell {...props} phonemeLeft="ʏ" />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} phonemeLeft="ʊ" />
                        </tr>
                        <tr>
                            <th role="row">Mid</th>
                            <PhonemeCell {...props} phonemeLeft="e" />
                            <PhonemeCell {...props} phonemeLeft="ø" />
                            <PhonemeCell {...props} phonemeLeft="ə" />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} phonemeLeft="ɤ" />
                            <PhonemeCell {...props} phonemeLeft="o" />
                        </tr>
                        <tr>
                            <th role="row"></th>
                            <PhonemeCell {...props} phonemeLeft="ɛ" />
                            <PhonemeCell {...props} phonemeLeft="ɶ" />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} phonemeLeft="ʌ" />
                            <PhonemeCell {...props} phonemeLeft="ɔ" />
                        </tr>
                        <tr>
                            <th role="row">Low</th>
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} phonemeLeft="æ" />
                            <PhonemeCell {...props} phonemeLeft="a" />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} phonemeLeft="ɑ" />
                            <PhonemeCell {...props} phonemeLeft="ɒ" />
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default VowelsChart
