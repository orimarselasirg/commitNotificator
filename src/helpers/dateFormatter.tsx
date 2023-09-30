export const formatterDate = (fecha: string) => {
  return new Date(fecha).toLocaleDateString('en-US', 
    {year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });
}