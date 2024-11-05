import React, { useState } from 'react';

function ListaDeContatos() {

    const [contatos, setContatos] = useState([]);
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('')

    const adcionarContato = () => {
        if (nome && telefone) {
            setContatos([...contatos, { nome, telefone }]);
            setNome('');
        }
    };

    return (
        <>

            <h2>Lista De Contatos</h2>
            <div>
                <input type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder='Nome'
                />
                <input type="text"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    placeholder='Telefone'
                />
                <button onClick={adcionarContato}>Adcionar Contato</button>

            </div>

            <ul>
                {contatos.map((contato,index) => (
                    <li key = {index}>
                        <strong>{contato.nome}:</strong>{contato.telefone}
                    </li>
                ))}
            </ul>

        </>
    )





} export default ListaDeContatos