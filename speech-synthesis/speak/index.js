document.addEventListener('DOMContentLoaded', event => {

    const input     = document.querySelector('textarea[name="text"]')
    const select    = document.querySelector('select[name="voice"]')
    const starter   = document.querySelector('div#starting-point')
    const button    = document.querySelector('button#trigger')
    const form      = document.querySelector('#form')

    starter.addEventListener('click', event => {
        const voices    = window.speechSynthesis.getVoices().filter(voice => voice.lang == 'id-ID')

        if (!voices.length) {
            return
        }

        starter.style.display = 'none'
        form.style.display = 'block'
    
        button.addEventListener('click', event => {
            
            const utterance = new SpeechSynthesisUtterance(input.value)
            if (voices.length) {
                utterance.voice = voices[select.value || 0]
            }
    
            speechSynthesis.speak(utterance)
        })
    
        voices.forEach((voice, index) => {
            const option = document.createElement('option')
            option.innerHTML = voice.name
            option.value = index
    
            select.appendChild(option)
        });
    })

    
})