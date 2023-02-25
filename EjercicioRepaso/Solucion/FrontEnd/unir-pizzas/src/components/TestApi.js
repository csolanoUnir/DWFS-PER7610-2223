import { useFetch } from '../hooks/useFetch'

export const TestApi = () => {

    const {fetchResponse} = useFetch("http://localhost:8762/ms-pizza-catalogue/pizzas");
    console.log("montando componente...");

  return (
    <>
    <p><b>Unir - Catalogo de Pizzas</b></p>
    <p>{JSON.stringify(fetchResponse)}</p>
    </>
  )
}
