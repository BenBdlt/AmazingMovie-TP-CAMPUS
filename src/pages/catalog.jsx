import React, { useEffect, useState } from 'react';
import { Page, Navbar, List, ListItem } from 'framework7-react';
// import Movie from '../components/Movie' tentative de séparer les cards des films, problème avec jsx

const CatalogPage = () => {

  const [term, setTerm] = useState("")
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  //AJOUT DE LA CLASS isOpen POUR + DINFO SUR LE FILM
  const [isOpen, setIsOpen] = useState(false);
  const [openInfo, setOpenInfo] = useState([]);
  const toggleMovie = (i) => {
    setIsOpen(i)
    console.log(items.Search[i].imdbID)
    var url = `https://omdbapi.com/?i=${items.Search[i].imdbID}&apikey=28591929`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            setOpenInfo(result);
          }
        )
        console.log(openInfo)
  };


  useEffect(() => {
    const search = async () => {
      // var url = `https://omdbapi.com/?s=${}&apikey=28591929`
      // console.log(url)
      console.log(term)
      console.log(items)
      fetch(`https://omdbapi.com/?s=${term}&apikey=28591929`)
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
          },
          (error) => {
            setError(error);
          }
        )
    }
    search()
  }, [term])
  

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else {
    return (
      <Page name="catalog">
        <Navbar title="Catalogue de nos films" />
        <div className="field">
            <input
              placeholder='Recherche...'
              className="inputMovie"
              value={term}
              onChange={e => setTerm(e.target.value)}
            />
        </div>
        <List>
            { !items.Search ? (
              <div className="loadingMessage">Quel film vous fait envie ?</div>
            ) : (
              items.Search.slice(0).map((item, i) => (
                // <Movie key={`${index}-${item.Title}`} movie={item} />
                <ListItem className={isOpen === i ? 'opened': "test"} key={i}>
                  {isOpen === i ? (
                    //SI LA CARD EST OUVERTE
                    <div>
                      <img src={item.Poster} className="lazy" />

                      <div>
                        <p>{item.Title}</p>

                        <h6>Sortie le : {openInfo.Released}</h6>

                        <h6>Etat : {openInfo.Country}</h6>
                        
                        <span>{openInfo.imdbRating}/10</span>
                      </div>
                      <span onClick={() => toggleMovie(null)}>- d'informations</span>
                    </div>
                    
                  ) : (
                    // SI LA CARD EST NON OUVERTE
                    <div>
                      <img src={item.Poster} className="lazy" />

                      <div>
                          <p>{item.Title}</p>

                          <span onClick={() => toggleMovie(i)}>+ d'informations</span>
                          {/* <span>{item.imdbRating}/10</span> */}
                      </div>
                    </div>
                    
                  )}
                  
                    
                </ListItem>
              ))
            )}
        </List>
      </Page>
        
    );
  }
}

export default CatalogPage;
