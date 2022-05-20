import React, { useEffect, useState } from 'react';
import { Page, Navbar, List, ListItem, Block, Button, useStore } from 'framework7-react';


const CatalogPage = () => {

  const [term, setTerm] = useState("")
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const search = async () => {
      var url = 'https://omdbapi.com/?s='+term+'&apikey=28591929'
      console.log(url)
      fetch(url)
      // fetch("https://omdbapi.com/apikey=28591929")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }
    search()
  }, [term])
  

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <Page name="catalog">
      <Navbar title="Catalogue de nos films" />
      <div className="field">
          <label>Search Term</label>
          <input
            className="input"
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
      </div>
      <List>
        <ListItem>
          <img src={items.Poster} className="lazy" />

          <div>
            <p>{items.Title}</p>

            <span>{items.imdbRating}/10</span>
          </div>
        </ListItem>
      </List>
    </Page>
        
    );
  }
}

export default CatalogPage;
