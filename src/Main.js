import './assets.css';
import './main.css';
import React from 'react';

function Main() {
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
                    <button>Cari</button>	
                </div>
            </div>
            <div className="searchResult">
                
            </div>
        </React.Fragment>       
    );
}

export default Main;