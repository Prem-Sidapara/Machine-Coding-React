import React, {useId} from 'react';

const InputBox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = 'USD',
    amountDisabled = false,
    currencyDisabled = false,
    className = ''
}) => {
    const id = useId();
  return (
    <div>
        <div className={` bg-white p-3 rounded-lg text-sm flex ${className}`}>
           <div className='w-1/2 '>
                <label htmlFor='currency' className='text-black/40 mb-2 inline-block '>{label}</label>
                <input type="number"
                id={id}
                    className='outline-none w-full bg-transparent py-1.5'
                    placeholder='Amount'
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className='text-black/40 mb-2 w-full'>Currency Type</p>
                <select className=' outline-none w-full bg-transparent border border-black/20 rounded-md p-2'
                    value={selectedCurrency}
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}
                >
                    {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    </div>
  );
}

export default InputBox;