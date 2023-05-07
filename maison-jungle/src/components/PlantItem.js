import CareScale from './CareScale'
import CapitalizeFirstLetter from './CapitalizeFirstLetter';
import '../styles/PlantItem.css'

// import '../styles/PlantItems.css'

function PlantItem({ id, cover, name, water, light, isBestSale, isSpecialOffer, category }) {

    return <li key={id} className='lmj-plant-item'>
        <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
        {CapitalizeFirstLetter(name)}

        <div>
            <CareScale careType='light' scaleValue={light} />
            <CareScale careType='water' scaleValue={water} />

        </div>
    </li>
}

export default PlantItem