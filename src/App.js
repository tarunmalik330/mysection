import product from './assets/images/png/product.png'
import CardImg1 from './assets/images/png/CardImg1.png'
import CardImg2 from './assets/images/png/CardImg2.png'
import CardImg3 from './assets/images/png/CardImg3.png'
import CardImg4 from './assets/images/png/CardImg4.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container">
        <h2 class="ff-HindSiliguri fw_600 fs_36 text-center text_black pb_49">Featured Product</h2>
        <div class="row justify-content-center">
          <div class="col-xl-5 col-md-10 col-12 position-relative">
            <p class="position-absolute text_white ff-HindSiliguri fw_600 lh_117 fs_58 text_shadow text-center top_21 left-0 right-0">Explore More
              Product</p>
            <img src={product} alt='product' className='w-100 border_radius30 h-100' />
          </div>
          <div class="col-xl-7 col-12">
            <div class="row">
              <div class="col-md-6 col-12 mt-xl-50 mt_50">
                <div class="card">
                  <img src={CardImg1} alt='CardImg1' className='w-100 card-img' />
                  <p class="text_black fs_16 fw_400 ff-OpenSans pt_22 pb_27">
                    Concetti Di-Lusso ALESANDRDO Luxury
                    Turkish Spa Towels and ganic Bamboo
                    Robes 12 PC set
                  </p>
                  <div class="d-flex align-items-center justify-space-between">
                    <p class="text_red ff-HindSiliguri fs_24 fw_600">$169.99</p>
                    <p class="line_through text_grey ff-HindSiliguri fs_16 fw_400">$199.99</p>
                    <button class="button text_white fs_16 fw_400 ff-HindSiliguri">ADD CART</button>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-12 mt-xl-50 mt_50">
                <div class="card">
                  <img src={CardImg2} alt='CardImg2' className='w-100 card-img' />
                  <p class="text_black fs_16 fw_400 ff-OpenSans pt_22 pb_49">
                    Concetti Di-Lusso CAPPY Organic
                    Turkish Cotton - Set of 4 in Gift Box
                  </p>
                  <div class="d-flex align-items-center justify-space-between">
                    <p class="text_red ff-HindSiliguri fs_24 fw_600">$59.99</p>
                    <p class="line_through text_grey ff-HindSiliguri fs_16 fw_400">$199.99</p>
                    <button class="button text_white fs_16 fw_400 ff-HindSiliguri">ADD CART</button>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-12 mt_50">
                <div class="card">
                  <img src={CardImg3} alt='CardImg3' className='w-100 card-img' />
                  <p class="text_black fs_16 fw_400 ff-OpenSans pt_22 pb_27">
                    Concetti Di-Lusso ALESANDRDO Luxury
                    Turkish Spa Towels and ganic Bamboo
                    Robes 12 PC set
                  </p>
                  <div class="d-flex align-items-center justify-space-between">
                    <p class="text_red ff-HindSiliguri fs_24 fw_600">$159.99</p>
                    <p class="line_through text_grey ff-HindSiliguri fs_16 fw_400">$199.99</p>
                    <button class="button text_white fs_16 fw_400 ff-HindSiliguri">ADD CART</button>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-12 mt_50">
                <div class="card">
                  <img src={CardImg4} alt='CardImg4' className='w-100 card-img' />
                  <p class="text_black fs_16 fw_400 ff-OpenSans pt_22 pb_27">
                    Concetti Di-Lusso ALESANDRDO Luxury
                    Turkish Spa Towels and ganic Bamboo
                    Robes 12 PC set
                  </p>
                  <div class="d-flex align-items-center justify-space-between">
                    <p class="text_red ff-HindSiliguri fs_24 fw_600">$59.99</p>
                    <p class="line_through text_grey ff-HindSiliguri fs_16 fw_400">$199.99</p>
                    <button class="button text_white fs_16 fw_400 ff-HindSiliguri">ADD CART</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <button class="Showmore_btn ff-HindSiliguri fw_600 fs_18 text_white mt_89 mt_50">SHOW MORE</button>
        </div>
      </div>

    </div>
  );
}

export default App;
