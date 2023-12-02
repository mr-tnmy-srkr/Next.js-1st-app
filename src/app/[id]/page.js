

const DynamicPage = ({params,searchParams}) => {
 console.log(params);
 console.log(searchParams);
  return (
    <>
    <h1>DynamicPage : {params.id}</h1>
    <h1>Search by : {searchParams.category}</h1>
    </>
  )
}

export default DynamicPage