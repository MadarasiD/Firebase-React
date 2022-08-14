import './App.css';
import { useState, useEffect} from "react";
import { db } from "./firebase-config"
import { addDoc, collection, getDocs } from 'firebase/firestore';

function App() {

  const [ termek, setTermek] = useState([]);
  const termekCollection = collection(db, 'termekek');

  const [ name, setName ] = useState("");
  const [ price, setPrice ] = useState(0);
  const [ categori, setCategori ] = useState("");
  const [ darab, setDarab ] = useState(0);
  const [ number, setNumber ] = useState(0);

  const insertTermek = async () => {
    await addDoc(termekCollection, {Termék_neve: name, Termék_ára: Number(price), Termék_kategória: categori, Termék_darabszáma: Number(darab), Termék_cikkszáma: Number(number)});
    setName("");
    setPrice("");
    setCategori("");
    setDarab("");
    setNumber("");
  }

  useEffect(()=>{

    const getTermek = async () => {


      const data = await getDocs(termekCollection);
      setTermek(data.docs.map(doc => ({...doc.data(), id:doc.id})));
    }

    getTermek();

  }, []);


  return (

    <div className="App">
      <div>
      <h1>Firebase React vizsga feladat</h1>
      </div>
      <div className="form">
          <input type="text" placeholder='Termék neve' onChange={(e)=>{
            setName(e.target.value);
          }}/>
          <input type="text" placeholder='Termék ára' onChange={(e)=>{
            setPrice(e.target.value)}}/>
          <input type="text" placeholder='Termék kategória' onChange={(e)=>{
            setCategori(e.target.value)}}/>
          <input type="text" placeholder='Termék darabszáma' onChange={(e)=>{
            setDarab(e.target.value)}}/>
          <input type="text" placeholder='Termék cikkszáma' onChange={(e)=>{
            setNumber(e.target.value)}}/>
      <button onClick={insertTermek}>Termék rögzítése</button>
      </div>
      
      {
        termek.map(t => {
          return(
            <div className='termekform'>

              <h4>Termék neve: {t.Termék_neve}</h4>
              <p><strong>Termék ára:</strong> {t.Termék_ára}</p>
              <p><strong>Termék kategória:</strong> {t.Termék_kategória}</p>
              <p><strong>Termék darabszáma:</strong> {t.Termék_darabszáma}</p>
              <p><strong>Termék cikkszáma:</strong> {t.Termék_cikkszáma}</p>

            </div>
          )
        })
      }
    </div>
  );
}

export default App;
