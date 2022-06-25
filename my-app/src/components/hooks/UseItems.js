import {useState} from "react"

export const UseItems = (stock) => {
    const [amount, setAmount] = useState(0)
    const count = (value) => {
        const result = amount + value
        if (result <= stock) {
            setAmount(amount + value)
        }
    }

    return {
        count, amount
    }
}   