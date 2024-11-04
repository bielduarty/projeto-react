import React, { useState } from 'react';

function GaleriaDeImagens() {
    const [imagens, setImagens] = useState([
        'https://loremflickr.com/150/150?random=1',
        'https://loremflickr.com/150/150?random=2',
        'https://loremflickr.com/150/150?random=3'
    ]);

    const adcionarImagem = () => {
        setImagens([...imagens, 'https://loremflickr.com/150/150?random=4' + random ]);
        setRandom(random + 1); 
    };
    /*  const adicionarImagem = () => {
    setImagens([...imagens, 'https://loremflickr.com/150/150?random=' + random]);
    setRandom(random + 1); 
  }; */

    return (
        <>
            <h2>Galeria de Imagens</h2>

            <div style={{ display: 'flex', flexWrap: 'wrap' }}>{imagens.map((imagem, index) => (
                <img key={index} src={imagem} alt={'imagem ${index +1}'} style={{ margin: '5px' }} />
            ))}
            </div>
            <button onClick={adcionarImagem} style={{ marginTop: '10px' }}>Adcionar Imagem</button>
        </>
    );

} export default GaleriaDeImagens