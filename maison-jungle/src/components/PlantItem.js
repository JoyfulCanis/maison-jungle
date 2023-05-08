import CareScale from './CareScale'
import '../styles/PlantItem.css'
// let x = 0
// const hello = [`Ne cliquez pas SVP`, "Arrêtez SVP", "Non mais vraiment, STOP !", "MAIS JPP !", "Je t'ai report.", "J'ai cassé tes juggestions Youtube"]
// function handleClick(plantName){
//     x>5?((x=0) && alert("C'est fini !")):(alert(hello[x] +" "+ `${plantName}`, (x++)))
// }



//onClick={() => handleClick(name)} dans la <li>
function PlantItem({ id, cover, name, water, light }) {

    return <li key={id} className='lmj-plant-item'>
        <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
        {name}

        <div>
            <CareScale careType='light' scaleValue={light} />
            <CareScale careType='water' scaleValue={water} />

        </div>
    </li>
}

export default PlantItem


