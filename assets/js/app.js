const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

// Cambié el selector a '#name' asumiendo que el elemento tiene un id llamado 'name'.
const $n = document.querySelector('#name'); 
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

// Convertí la función en async para que el 'await' funcione correctamente.
async function displayUser (username) {
  $n.textContent = 'cargando...';
  try {
    // Realizo la llamada a la API de GitHub para obtener la información del usuario.
    const response = await fetch(`${usersEndpoint}/${username}`);
    
    // Verifico si la respuesta es exitosa, si no, lanzo un error.
    if (!response.ok) throw new Error('Error al obtener datos');
    
    // Convierto la respuesta a JSON para poder acceder a los datos.
    const data = await response.json();
    console.log(data);
    
    // Uso comillas invertidas en lugar de comillas simples para que las plantillas de cadena funcionen correctamente.
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch (err) {
    // En caso de error, llamo a la función 'handleError'.
    handleError(err);
  }
}

// Cambié 'n.textContent' a '$n.textContent' ya que '$n' es la variable correcta para el elemento en el DOM.
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;
}

// Llamo a la función 'displayUser' con un nombre de usuario específico ('stolinski').
displayUser('stolinski');