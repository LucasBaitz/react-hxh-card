import './SuspendedList.css';

const SuspendedList = ({ label, itens, Change }) => {
  function changeValue(event) {
    Change(event.target.value)
}

  return (
    <div className="suspended-list">
      <label>{label}</label>
      <select onChange={changeValue}>
        {itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  );
};

export default SuspendedList;
