
import GalleryCustom from "./Galleria";
import TvShowComponent from "./molecole/TvSowComponent";




const CustomMain = () => {
    return (
        <>
          <TvShowComponent/>
          <p className="text-light mx-5">Dragon Ball</p>
          <GalleryCustom url="http://www.omdbapi.com/?apikey=f0a20f4e&s=Dragon+Ball"/>
          <br/>
          <p className="text-light mx-5">Marvel</p>
          <GalleryCustom url="http://www.omdbapi.com/?apikey=f0a20f4e&s=Marvel"/>
          <br/>
          <p className="text-light mx-5">Spiderman</p>
          <GalleryCustom url="http://www.omdbapi.com/?apikey=f0a20f4e&s=Spider+man"/>
        </>
    )
}

export default CustomMain;