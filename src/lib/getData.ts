export default async function getData (){
await fetch(process.env.NEXT_PUBLIC_ADD + '/api/hello', {method: 'GET'})
    .then(response => {
        return response.json()
      })
  return [];
                
}