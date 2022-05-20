import React, {useState} from 'react';

const AddContact = (props) => {
    let [name, setName] = useState('');
    let [lastName, setLastName] = useState('');
    let [photo, setPhoto] = useState('');

    function handleClick() {
        let newContact = {
            name,
            lastName,
            photo,
            id: Date.now()
        }
        props.handleNewContact(newContact)
        setName('')
        setLastName('')
        setPhoto('')
    }

    return (
        <div className="d-flex justify-content-center m-5" >
            <input
                onChange={(e) => setName(e.target.value)}
                type="text" placeholder="Name"
                value={name}
            />
            <input
                onChange={(e) => setLastName(e.target.value)}
                type="text" placeholder="LastName"
                value={lastName}
            />
            <input
                onChange={(e) => setPhoto(e.target.value)}
                type="url" placeholder="URL Photo"
                value={photo}
            />
            <button className='btn-success' onClick={handleClick}>Add contact</button>

        </div>

    );
};

export default AddContact;