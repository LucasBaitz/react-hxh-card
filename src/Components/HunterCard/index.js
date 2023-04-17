import './style.css'

const HunterCard = ({name, photoUrl, gender, age}) => {
    
    return (
        <div className="card-frame">
            <div className="white-border">
                <div className='content'>
                    <div className="hunter-photo">
                        <img src={photoUrl} alt="Hunter card" />   
                    </div>
                    <div className="bar-code">
                        <img className='barcode-img' src='./imgs/hunterBarcode.png' alt="bar code" />
                    </div>
                </div>
                    <div className="information">
                        <div className='hunter-name'>
                            <h1>{name}</h1>
                        </div>
                        <p>ハンターライセンス <br/>
                            性別:{gender} 年齢:{age}
                            ハンターライセンスカードについて<br/>
                            本カードは 本人以外使用不可能でず<br/>
                            紛失視された際 ライセンスが剥奪される<br/>
                            事はありませんが カードの再発行はどきません</p>  
                    </div>
                
            </div>
        </div>
    )
}

export default HunterCard;