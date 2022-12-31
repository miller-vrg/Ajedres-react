import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ajedres</h1>
      </header>
      <div className='contenedor'>
        <header className='contenedor__cabecera'>
          <FilasLetras />
        </header>
        <div className='contenedor__interno'>
          <ColumnasNumbers />
          <Tablero/>
          <ColumnasNumbers />
        </div>
        <footer className='contenedor__pie'>
          <FilasLetras />
        </footer>
      </div>
    </div>
  );
}

const FilasLetras = ()=>{
  return(
    <span className='cabecera__siglas'>
      <div className='cabecera__siglas-items flex'>
        <span className='cabecera__item'> A </span>
        <span className='cabecera__item'> B </span>
        <span className='cabecera__item'> C </span>
        <span className='cabecera__item'> D </span>
        <span className='cabecera__item'> F </span>
        <span className='cabecera__item'> E </span>
        <span className='cabecera__item'> F </span>
        <span className='cabecera__item'> G </span>
      </div>
    </span>
  );
};

const Tablero = ()=>{
  return(
    <div className='container__interno-tablero'>
      <ValueTablero />
    </div>
  );
};

const ValueTablero = ()=>{
  const contentTemp = [];
  let i = 1, cuenta = 0;
  let color = "blanco";
  do{
    contentTemp.push(
      <div className='container__tablero-fila' data-y={i} key={i}>
        <LlenarItems cuenta={cuenta+1} color={color}/>
      </div>
    );
    cuenta = i * 8;
    i++;
    color = color === "blanco" ? "negro": "blanco";

  }while(i !== 9);
  return contentTemp;
};

const LlenarItems = (props)=>{
  const item = [];
  let cuenta = props.cuenta;
  let color = props.color;
  for(let j=1; j < 9; j++) {
    let fondo =(color === "blanco")? "#fff" : "#000";
    const stilo = {background: fondo};
    const span = <span className='contenedor__tablero-fila-items casillas' style={stilo} data-x={j} data-cuenta={cuenta} key={cuenta} data-isblanco={color}></span>;
    item.push(span);
    cuenta++;
    color = color === "blanco" ? "negro": "blanco";
  }
  return(item);
};

const ColumnasNumbers = ()=>{
  return(
    <span className='contenedor__numbers'>
    <div className='contenedor__numbers-items flex'>
      <span className='number__item'> 1 </span>
      <span className='number__item'> 2 </span>
      <span className='number__item'> 3 </span>
      <span className='number__item'> 4 </span>
      <span className='number__item'> 5 </span>
      <span className='number__item'> 6 </span>
      <span className='number__item'> 7 </span>
      <span className='number__item'> 8 </span>
    </div>
  </span>
  );
};
//casilla.addEventListener((event)=>{alert("holas"); console.log(casilla);

const casillas = document.querySelectorAll(".container__tablero-fila .casillas");

//target
casillas.forEach((casilla)=>{
  casilla.addEventListener("click",()=>{
    alert(casilla.dataset.cuenta);
  });
});

export default App;
