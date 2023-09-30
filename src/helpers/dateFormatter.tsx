export const formatFecha = (fecha: string) => {
  const options = {
    year: 'numeric',
    month: 'short', // 'short' para obtener el nombre abreviado del mes
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  return new Date(fecha).toLocaleDateString('en-US', options);
}

const fechaOriginal = '2023-09-30T02:37:14Z';
const fechaFormateada = formatFecha(fechaOriginal);
console.log(fechaFormateada);