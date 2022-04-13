export function buildNotificationView(message, tipo) {
  const tipoError =  `
    <p class="error">${message}</p>
    <button>❌</button>
  `;
  const tipoCheck =  `
    <p class="check">${message}</p>
    <button>✔️</button>
  `;
  const tipoInfo=  `
    <p class="info">${message}</p>
    <button>⚠️</button>
  `;
  var devolver=null;
  if (tipo=="check"){
    devolver=tipoCheck;
  }
  else if(tipo=="info"){
    devolver=tipoInfo;
  }
  else{
    devolver=tipoError;
  }
  return devolver;
}
