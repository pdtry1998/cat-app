import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import CatItem from './components/CatItem';
import cats from './data/cat';
import CatPost from './components/CatPost'
import AppSearch from './components/AppSearch';



function App() {

  const [selectedCat,SetselectedCat] = useState(null);

  const [searchText,setSearchText] = useState("");

  function onCatOpenClick(theCat) {
    SetselectedCat(theCat)
  }
  function onCloseClick() {
    SetselectedCat(null)
  }

  // const fillteredCats = cats.filter((cats)=>{
  //     return cats.title.includes(searchText);
  // })

  const catElements = cats.filter((cats)=>{
    return cats.title.includes(searchText);
  }).map((cats,index) => {
      return <CatItem cats = {cats} key={index} onCatClick =
       {onCatOpenClick}/>
  });

  let catsPost = null;
  if(!!selectedCat){
     catsPost = <CatPost cats = {selectedCat} onBgClick = {onCloseClick} />
  }

  return (
    <div className="App">
        <AppHeader/>
        <section className="app-section">
          <div className="app-container">
            <AppSearch value = {searchText} onValueChange = {setSearchText} />
                <div className="app-grid">
                    {catElements}
                </div>
          </div>
        </section>
        {catsPost}
    </div>
  );
}

export default App;
