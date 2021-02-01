import '../css/assets.css';
import '../css/main.css';
import '../js/main.js'
import React, { Component } from 'react';
import Card from './Card';

class Main extends Component {
    state = {
        cards: [
            { id: 1},
            { id: 2},
            { id: 3},
        ]
    };
    render() {
        return (
            <React.Fragment>
                <div className="banner">
                    <div className="bannerIMG">
                    </div>
                    <div className="bannerCover">
                        
                    </div>
                    <div className="bannerTitle">
                        <h1 className="bannerTitle">Temukan Resep Manca Negara Terbaik Disini!</h1>
                    </div>
                </div>
                <div className="search">
                    <div className="searchBox">
                        <input type="text" name="" />
                        <button className="searchButton"><p>Cari</p></button>	
                    </div>
                </div>
                <div className="searchResult">
                    <div className="title">
                        <p>Hasil Pencarian Resep</p>
                    </div>
                    <div className="cardResult">
                        <div className="resepCard">
                            {this.state.cards.map(card => (
                                <Card 
                                    key = {card.id}
                                    id = {card.id}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </React.Fragment>       
        );
    }
}

export default Main;