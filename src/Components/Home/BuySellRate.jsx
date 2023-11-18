import React from 'react'

function BuySellRate() {
    return (
        <div>
            <div className="overflow-x-auto w-3/4 mx-auto">
                <table className="table border">
                    {/* head */}
                    <thead className=' '>
                        <tr className='border bg-base-300'>
                            <th colSpan={2} className='border'>We Accept</th>
                            <th>Buy rate</th>
                            <th>Sell Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr >
                            <td colSpan={2}>Payoneer</td>
                            <td>112</td>
                            <td>124</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <td colSpan={2}>Wise</td>
                            <td>110</td>
                            <td>120</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <td colSpan={2}>Perfect Money</td>
                            <td>110</td>
                            <td>118</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BuySellRate