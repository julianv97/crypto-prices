import React, {useContext} from 'react'
import CoinsContext from '../context/CoinsContext'

const TableCoins = () => {
    const {state} = useContext(CoinsContext)
    console.log(state)
    return (
        <div>
           
        </div>
    )
}

export default TableCoins
