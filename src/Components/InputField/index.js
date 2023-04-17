import './InputField.css'

const InputField = ({label, mandatory, placeholder, selectedType, Change}) => {

    function changeValue(event) {
        Change(event.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input required={mandatory} type={selectedType} placeholder={placeholder} onChange={changeValue}/>
        </div>
    )
}

export default InputField
