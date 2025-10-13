import React from 'react'

const CharacterPage = () => {
    
  let [CharacterData, setCharacterData] = useState([]);

  useEffect(()=>{
    fetch('https://thesimpsonsapi.com/api/characters')
    .then(response => response.json())
    .then(data => {setCharacterData(data.results); console.log(data)})
    .catch(error => console.error('Error feyching data: ', error));
    
  },[])

  return (
    <div>
    </div>
  );
}

export default CharacterPage;