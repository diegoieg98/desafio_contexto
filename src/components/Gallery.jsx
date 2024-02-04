import { useContext } from "react";
import { GaleryContext } from "../context/PhotoContext";
import IconHeart from './IconHeart'

const Gallery = () => {

  const { fotos, setFotos } = useContext(GaleryContext)


  const changeLiked = (id) =>{
    const newData = [...fotos]
    const clickImage = fotos.find((imagen) => imagen.id === id)

    if(clickImage){
      clickImage.liked = !clickImage.liked
    }

    setFotos(newData)
  }

  return(
    <div className="gallery grid-columns-5 p-3">
      {fotos.map((foto) => (
        <div key={foto.id} className="fotos">
          <img onClick={() => changeLiked (foto.id)} src={foto.src.medium} alt="" width='300px' height='300px' />
          <p>{foto.alt}</p>
          <IconHeart filled={foto.liked}/>
        </div>
      ))}
      
    </div>
  ) 
};
export default Gallery;
