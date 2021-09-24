import React from "react";


function useLocalStorage(NombreStorage, Valorinicial) {

    const [loading, setLoading] = React.useState(true);
    const [error, seterror] = React.useState(false);
    const [item, setItem] = React.useState(Valorinicial);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(NombreStorage);
          let parseItem;
  
          if (!localStorageItem){
            localStorage.setItem(NombreStorage, JSON.stringify(Valorinicial));
            parseItem = Valorinicial;
          } else {
            parseItem = JSON.parse(localStorageItem);
          }
  
          setItem(parseItem);
          setLoading(false);
        } catch(err){
          seterror(err);
          setLoading(false);
        }
      }, 2000)
    });
  
    
  
    
  
    const guardarItem = (nuevasItem) =>{
      try {
        const strItem = JSON.stringify(nuevasItem);
        localStorage.setItem(NombreStorage, strItem);
        setItem(nuevasItem);
      } catch(err){
        seterror(err);
        setLoading(false);
      }
    };
  
    return {
      item,
      guardarItem,
      loading,
      error
    }
  
  
  }

  export { useLocalStorage };