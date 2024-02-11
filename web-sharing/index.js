let image

fetch('https://irimold.web.id/images/logo.png')
    .then(response => {
        if (response.ok) {
            return response.blob()
        }
    })
    .then(result => {
        image = result
    })
    .catch(error => alert(error))


const handleShare = (event) => {

    if (!event.target.dataset || !event.target.dataset.variant) {
        return
    }

    const { variant } = event.target.dataset

    
    const mime  = image.type
    const files = [new File([image], `irimold-logo.png`, { type: mime })]
    const title = 'Irimold logo'
    const text  = 'The logo of Irimold, Copyright 2024'
    const url   = 'https://irimold.web.id'

    const shareData = { files: files }

    if (variant.includes('text')) {
        shareData.text = text
    }

    if (variant.includes('title')) {
        shareData.title = title
    }

    if (variant.includes('url')) {
        shareData.url = url
    }

    navigator.share(shareData)
    .catch(error => alert(error))

}

document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', handleShare)
})