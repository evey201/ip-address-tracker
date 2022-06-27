const fetchData = async (url, init) => {
    return fetch(url, {
      ...init,
      headers: {
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .catch(error => error)
  }
  
  export default fetchData
  