const trigger = document.querySelector('#trigger')
const listContainer = document.querySelector('#container')

trigger.addEventListener('click', () => {

    listContainer.innerHTML = ''
    
    const voices = speechSynthesis.getVoices().filter(voice => voice.lang == 'id-ID')
    voices.forEach(voice => {

        console.log(voice)
        
        const listElem = document.createElement('li')
        listElem.innerHTML = `${voice.name} (URI: ${voice.voiceURI}) (Lang: ${voice.lang})`

        listContainer.appendChild(listElem)

    })

})