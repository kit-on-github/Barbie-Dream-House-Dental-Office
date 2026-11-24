import './Shop.css'

import dentalInstrumentsImage from '../assets/shop/dental-instruments.png'
import dentalTechnologyImage from '../assets/shop/dental-technology.png'
import dentalConsumablesImage from '../assets/shop/dental-consumables.png'
import laboratoryMaterialsImage from '../assets/shop/laboratory-materials.png'
import clinicalSupportImage from '../assets/shop/clinical-support.png'

import autoclaveSterilizersImage from '../assets/shop/autoclave-sterilizers.png'

function Shop() {

  return (

    <main className="shop-page">

      {/* SHOP INTRODUCTION */}
      <section className="shop-intro">

        <p className="shop-eyebrow">
          AURELIA DENTAL SUPPLY
        </p>

        <h1>
          Professional Dental Supplies
        </h1>

        <p className="shop-description">
          Explore professional dental instruments, technology,
          clinical materials, and equipment.
        </p>

      </section>

      {/* SHOP CATEGORIES */}
<section className="shop-categories">

  <h2>
    Shop by Category
  </h2>

  <div className="shop-category-grid">

    {/* DENTAL INSTRUMENTS */}
    <article className="shop-category-card">
      <div className="shop-category-image">
        <img
            src={dentalInstrumentsImage}
            alt="Professional dental mirrors, probes, and stainless-steel instruments"
        />

         <div className="shop-category-overlay">
            <h3>Dental Instruments</h3>
         </div>

      </div>

      <div className="shop-category-content">
       
        <p>Mirrors, probes, scalers, handpieces, and forceps.</p>
      </div>
    </article>

    {/* DENTAL TECHNOLOGY */}
    <article className="shop-category-card">
        <div className="shop-category-image">

        {/* Dental Technology photograph will go here */}
        <img
        src={dentalTechnologyImage}
        alt="Modern intraoral scanner with digital dental imaging equipment"
        />

        <div className="shop-category-overlay">
            <h3>Dental Technology</h3>
        </div>

        </div>

      <div className="shop-category-content">
        <p>Intraoral scanners, curing lights, and digital imaging.</p>
      </div>
    </article>

    {/* CONSUMABLES */}
    <article className="shop-category-card">
      <div className="shop-category-image">

        <img
            src={dentalConsumablesImage}
            alt="Dental gloves, gauze, composite filling materials, and disposable clinical supplies"
        />

        <div className="shop-category-overlay">
            <h3>Consumables</h3>
        </div>

      </div>

      <div className="shop-category-content">
        <p>Filling materials, anesthetics, gauze, and gloves.</p>
      </div>
    </article>

    {/* LABORATORY MATERIALS */}
    <article className="shop-category-card">
      <div className="shop-category-image">

        <img
            src={laboratoryMaterialsImage}
            alt="Dental impression molds, ceramic crowns, and laboratory models"
        />

        <div className="shop-category-overlay">
            <h3>Laboratory Materials</h3>
        </div>

      </div>

      <div className="shop-category-content">
        <p>Impressions, dental models, crowns, and prosthetic workflows.</p>
      </div>
    </article>

    {/* CLINICAL SUPPORT */}
    <article className="shop-category-card">

     <div className="shop-category-image">

    <img
        src={clinicalSupportImage}
        alt="Organized dental treatment cart and clinical support equipment"
    />

    <div className="shop-category-overlay">
        <h3>Clinical Support</h3>
    </div>

    </div>

      <div className="shop-category-content">
        <p>Clinical supplies and equipment for everyday practice operations.</p>
      </div>
    </article>

    {/* AUTOCLAVE STERILIZERS */}
    <article className="shop-category-card">
      
      <div className="shop-category-image">

  <img
  src={autoclaveSterilizersImage}
  alt="Modern dental autoclave with stainless-steel sterilization chamber"
/>

  <div className="shop-category-overlay">
    <h3>Autoclave Sterilizers</h3>
  </div>

</div>

      <div className="shop-category-content">
        <p>Sterilization equipment and supporting supplies.</p>
      </div>
    </article>

  </div>

</section>

    </main>

  )

}

export default Shop