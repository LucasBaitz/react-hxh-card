import InputField from '../InputField'
import SuspendedList from '../SuspendedList'
import Button from '../Button'
import './Form.css'
import { useState } from 'react'
import HunterCard from '../HunterCard'

const Form = () => {
    const genders = [
        'Other',
        'Female',
        'Male',
    ]
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [image, setImage] = useState('');
    const [gender, setGender] = useState('Other')
    const [showCard, setShowCard] = useState(false);

    function displayForm(event) {
        event.preventDefault();
        setShowCard(false)
    }
    
    function displayCard(event) {
        event.preventDefault();
        UseDefault()
        setShowCard(true);
    }


    function UseDefault(){
        if (image.length < 10) {
            setImage('./imgs/defaultCard.png')
        }
    }

    return (
        <section className="formulario">
            {!showCard && (
                <form onSubmit={displayCard}>
                    <h2>Enter your data to redeem your Hunter License</h2>
                    <InputField mandatory={true} Change={value => setName(value)} label="Name" placeholder="Please enter your full name" />
                    <InputField mandatory={true} Change={value => setAge(value)} label="Age" selectedType="number" placeholder="Enter your age" />
                    <InputField mandatory={false} Change={value => setImage(value)} label="Image" placeholder="URL of your photo" />
                    <SuspendedList  label="Gender" Change={value => setGender(value)}  itens={genders}/>
                    <Button text="Get card"/>
                </form>
            )}
            {showCard && (
                <form onSubmit={displayForm} className='display-card'>
                    <HunterCard name={name} age={age} photoUrl={image} gender={gender} />
                    <Button text={"Go back to form"} />
                    
                </form>
            )}
        </section>
    )
}

export default Form
