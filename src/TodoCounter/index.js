import './TodoCounter.css';

/* Se puede utilizar una variable para construir estilos y asociarselos a los estilos en cada objeto
const estilos = {
  backgroundColor: 'red'

}

Nota: En la definicion de los estilos se puede utilizar numeros o string. Ejemplo en fontSize: 24 o '24px' es lo mismo

<h1 style={{
        fontSize:'24px',
        textAlign: 'center',
        margin: 0,
        padding: '48px'
      }}>
*/
function TodoCounter({ total, completed }){
    return (
      <h1 className="TodoCounter">
        Has completado <span>{completed}</span> de <span>{total}</span> TODOs
      </h1>
    );
  }

  /* Export Nombrado en vez de export default */
  export { TodoCounter };