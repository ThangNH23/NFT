import crypto3 from '../asset/crypto3.jpg'
import crypto4 from '../asset/crypto4.jpg'
import crypto5 from '../asset/crypto5.jpg'
import crypto6 from '../asset/crypto6.jpg'
import crypto7 from '../asset/crypto7.jpg'
import crypto8 from '../asset/crypto8.jpg'
import '../Component/service.css';

const Services=()=> {
  return (
    <div className='serviceSection'>
        <div className="title">
            <h3>Our Service</h3>
        </div>
        <div className="serviceContent">
            <div className="card">
                <div className="images">
                    <img src={crypto3} alt="" />
                </div>
                <div className="teks">
                    <h3>X World Game</h3>
                    <p>Country:   USA</p>
                    <p>Giá : 120$</p>
                    <button className='buy'>Buy now</button>
                </div>
                {/* <div className='Price'>120$</div> */}
            </div>
            <div className="card">
                <div className="images">
                    <img src={crypto4} alt="" />
                </div>
                <div className="teks">
                    <h3>X World Game</h3>
                    <p>Country:   USA</p>
                    <p>Giá : 120$</p>
                    <button className='buy'>Buy now</button>
                </div>
            </div>
            <div className="card">
                <div className="images">
                    <img src={crypto5} alt="" />
                </div>
                <div className="teks">
                    <h3>X World Game</h3>
                    <p>Country:   USA</p>
                    <p>Giá : 120$</p>
                    <button className='buy'>Buy now</button>
                </div>
            </div>
            <div className="card">
                <div className="images">
                    <img src={crypto6} alt="" />
                </div>
                <div className="teks">
                    <h3>X World Game</h3>
                    <p>Country:   USA</p>
                    <p>Giá : 120$</p>
                    <button className='buy'>Buy now</button>
                </div>
            </div>
            <div className="card">
                <div className="images">
                    <img src={crypto7} alt="" />
                </div>
                <div className="teks">
                    <h3>X World Game</h3>
                    <p>Country:   USA</p>
                    <p>Giá : 120$</p>
                    <button className='buy'>Buy now</button>
                </div>
            </div>
            <div className="card">
                <div className="images">
                    <img src={crypto8} alt="" />
                </div>
                <div className="teks">
                    <h3>X World Game</h3>
                    <p>Country:   USA</p>
                    <p>Giá : 120$</p>
                    <button className='buy'>Buy now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services