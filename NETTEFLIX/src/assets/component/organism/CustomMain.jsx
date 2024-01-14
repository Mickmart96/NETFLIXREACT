
import GalleryCustom from "./Galleria";
import TvShowComponent from "./molecole/TvSowComponent";




const CustomMain = () => {
    return (
        <>
          <TvShowComponent/>
          <h3 className="text-light mx-5">DRAGON BALL</h3>
          <GalleryCustom url="http://www.omdbapi.com/?apikey=f0a20f4e&s=Dragon+Ball"/>
          <br/>
          <h3 className="text-light mx-5">MARVEL</h3>
          <GalleryCustom url="http://www.omdbapi.com/?apikey=f0a20f4e&s=Marvel"/>
          <br/>
          <h3 className="text-light mx-5">SPIDERMAN</h3>
          <GalleryCustom url="http://www.omdbapi.com/?apikey=f0a20f4e&s=Spider+man"/>
        </>
    )
}

export default CustomMain;
