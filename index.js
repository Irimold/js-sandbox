const pullChanges = () => {
    
    const data = new FormData
    data.append('todo', 'pull')

    fetch('git/', {
        method: 'POST',
        body: data,
    }).then(async (response) => {
        const result = await response.json();
        
        if (result.success) {
            console.log(result.message)
        } else [
            console.error(result.message)
        ]
    }).catch(error => console.error(error));
    
}

const updateOrigin = () => {

    const data = new FormData
    data.append('todo', 'pull')

    fetch('git/', {
        method: 'POST',
        body: data
    }).then(async (response) => {
        const result = await response.json();
        
        if (result.success) {
            console.log(result.message)
        } else [
            console.error(result.message)
        ]
    }).catch(error => console.error(error));

}