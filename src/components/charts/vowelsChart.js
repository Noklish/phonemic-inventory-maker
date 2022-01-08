import React from 'react'
import PhonemeCell from '../common/phonemeCell'

const VowelsChart = props => {
    return (
        <>
            <h2 className="mt-3">Vowels</h2>
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
                            <PhonemeCell {...props} phonemeLeft="i" phonemeRight="iː" />
                            <PhonemeCell {...props} phonemeLeft="y" phonemeRight="yː" />
                            <PhonemeCell {...props} phonemeLeft="ɨ" phonemeRight="ɨː" />
                            <PhonemeCell {...props} phonemeLeft="ʉ" phonemeRight="ʉː" />
                            <PhonemeCell {...props} phonemeLeft="ɯ" phonemeRight="ɯː" />
                            <PhonemeCell {...props} phonemeLeft="u" phonemeRight="uː" />
                        </tr>
                        <tr>
                            <th role="row">Near-High</th>
                            <PhonemeCell {...props} phonemeLeft="ɪ" phonemeRight="ɪː" />
                            <PhonemeCell {...props} phonemeLeft="ʏ" phonemeRight="ʏː" />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} phonemeLeft="ʊ" phonemeRight="ʊː" />
                        </tr>
                        <tr>
                            <th role="row">High-Mid</th>
                            <PhonemeCell {...props} phonemeLeft="e" phonemeRight="eː" />
                            <PhonemeCell {...props} phonemeLeft="ø" phonemeRight="øː" />
                            <PhonemeCell {...props} phonemeLeft="ɘ" phonemeRight="ɘː" />
                            <PhonemeCell {...props} phonemeLeft="ɵ" phonemeRight="ɵː" />
                            <PhonemeCell {...props} phonemeLeft="ɤ" phonemeRight="ɤː" />
                            <PhonemeCell {...props} phonemeLeft="o" phonemeRight="oː" />
                        </tr>
                        <tr>
                            <th role="row">Mid</th>
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} phonemeLeft="ə" phonemeRight="əː" />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                        </tr>
                        <tr>
                            <th role="row">Low-Mid</th>
                            <PhonemeCell {...props} phonemeLeft="ɛ" phonemeRight="ɛː" />
                            <PhonemeCell {...props} phonemeLeft="œ" phonemeRight="œː" />
                            <PhonemeCell {...props} phonemeLeft="ɜ" phonemeRight="ɜː" />
                            <PhonemeCell {...props} phonemeLeft="ɞ" phonemeRight="ɞː" />
                            <PhonemeCell {...props} phonemeLeft="ʌ" phonemeRight="ʌː" />
                            <PhonemeCell {...props} phonemeLeft="ɔ" phonemeRight="ɔː" />
                        </tr>
                        <tr>
                            <th role="row">Near-Low</th>
                            <PhonemeCell {...props} phonemeLeft="æ" phonemeRight="æː" />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} phonemeLeft="ɐ" phonemeRight="ɐː" />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                        </tr>
                        <tr>
                            <th role="row">Low</th>
                            <PhonemeCell {...props} phonemeLeft="a" phonemeRight="aː" />
                            <PhonemeCell {...props} phonemeLeft="ɶ" phonemeRight="ɶː" />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} />
                            <PhonemeCell {...props} phonemeLeft="ɑ" phonemeRight="ɑː" />
                            <PhonemeCell {...props} phonemeLeft="ɒ" phonemeRight="ɒː" />
                        </tr>
                        <tr>
                            <th role="row">Diphthongs</th>
                            <td colSpan="6"><input className="form-control text-center" type="text"/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default VowelsChart
