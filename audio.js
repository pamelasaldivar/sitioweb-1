const searchInput = document.getElementById('searchInput');
const startButton = document.getElementById('startButton');



startButton.addEventListener('click', () => {
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.lang = 'es-ES'; // Establecer el idioma a español
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.start();

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            searchInput.value = transcript;
            console.log('Resultado: ', transcript);
        };

        recognition.onerror = (event) => {
            console.error('Error de reconocimiento: ', event.error);
        };

        recognition.onend = () => {
            console.log('Reconocimiento de voz finalizado.');
        };
    } else {
        alert('El reconocimiento de voz no está soportado en este navegador.');
    }
});
