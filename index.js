const pullChanges = () => {
    fetch('git', {
        method: 'POST',
        body: JSON.stringify({ todo: 'pull' }),
        headers: {
            'Content-Type': 'application/json'
        }
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
    fetch('git', {
        method: 'POST',
        body: JSON.stringify({ todo: 'update-origin' }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async (response) => {
        const result = await response.json();
        
        if (result.success) {
            console.log(result.message)
        } else [
            console.error(result.message)
        ]
    }).catch(error => console.error(error));
}