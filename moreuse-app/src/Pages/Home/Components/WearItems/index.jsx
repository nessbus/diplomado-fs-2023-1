import { Link } from "react-router-dom"
import { WearItemContainer, WearItemImage } from "./styles"

export const WearItem = ({_id, image, imageBack, name, target, gender, price }) => {

  return (
    //<Link to={'/wear-detail/${+_id}`} >
    //Forma tradicional
    <Link to={"/wear-detail/"+_id} >

      <WearItemContainer>
        <WearItemImage>
          <div>
            <img className= "frontImg" width="100px" alt="Wear"  src={image}/>
            <img className= "backImg" width="100px" alt="Wear"  src={imageBack}/>
          </div>
        </WearItemImage>
        <h2>{name}</h2>
        <h4>{target} / {gender === 'F' ? 'Niña': 'Niño' } </h4>
        <h4> {price} </h4>
      </WearItemContainer>
    </Link>
  )
}

