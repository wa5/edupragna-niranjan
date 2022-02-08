function api<T>(url: string): Promise<T> {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json()
      })
      .then(data => { /* <-- data inferred as { data: T }*/
        return data.data
      })
  }
  
  // Consumer - consumer remains the same
  api<{ title: string; message: string }>('https://jsonplaceholder.typicode.com/todos/1')
    .then(({ title, message }) => {
      console.log(title, message)
    })
    .catch(error => {
      console.log(error)
    })