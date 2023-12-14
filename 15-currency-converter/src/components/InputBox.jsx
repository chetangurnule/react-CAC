import React, { useId } from "react";
function InputBox({
  label,
  amount,
  onAmountChange,
  currencyValue = "usd",
  onCurrencyValueChange,
  currencyOptions = [],
  amoutDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amoutInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amoutInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amoutInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => onAmountChange(Number(e.target.value))}
          disabled={amoutDisable}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={currencyValue}
          onChange={(e) =>
            onCurrencyValueChange && onCurrencyValueChange(e.target.value)
          }
        >
          disabled = {currencyDisable}
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
