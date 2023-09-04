import React from 'react'
import { Header } from './components/Header'
import { Card } from './components/Card'
import Final from './components/Final'
import banner from './imagens/banner.jpg'
import card1 from './imagens/card1.jpg'
import card2 from './imagens/card2.jpg'
import card3 from './imagens/card3.jpg'
import card4 from './imagens/card4.jpg'

import styles from './styles.module.css'
import './styles/global.css'
// npm install
// npm run start


// https://github.com/profchines
function App() {
    const dados=[
        {
            imagem: card1,
            title:'Missao impossivel 2'
        },
        {
            imagem: card2,
            title:'Missao impossivel 3'
        },
        {
            imagem: card3,
            title:'Missao impossivel 4'
        },
        {
            imagem: card4,
            title:'Missao impossivel 1'
        }
    ]



    return (
        <>
            <Header />
            <img width="100%" src={banner} />
            <h1 className={styles.title}>Hello World</h1>
            <h1
                style={{
                    margin: 15
                }}
            >Filmes</h1>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {dados && dados.map((i) => {
                    return(<Card imagem={i.imagem} title={i.title} />)
                })}

            </div>
            <Final />

        </>
    );

}
export default App;
