    let mediaRecorder;
    let audioChunks = [];
    document.getElementById('audioButton').addEventListener('click', sendButton);

    const inputField = document.querySelector('.chat-footer input');
    const chatBody = document.querySelector('.chat-body');
    const sendButton = document.getElementById('sendButton');
    const emojiButton = document.getElementById('emojiButton');
    const attachButton = document.getElementById('attachButton');
    const voiceButton = document.getElementById('voiceButton');
    const audioButton = document.getElementById('audioButton');
    const stopButton = document.getElementById('stopButton');

    sendButton.addEventListener('click', () => {
        const message = inputField.value;
            if (message.trim() !== "") {
                const newMessage = document.createElement('div');
                newMessage.classList.add('message', 'sent');
                newMessage.innerHTML = `<p>${message}</p>`;
                chatBody.appendChild(newMessage);
                inputField.value = '';
                chatBody.scrollTop = chatBody.scrollHeight;
            }
    });

    // Función para abrir emojis
    emojiButton.addEventListener('click', () => {
        alert('Abrir panel de emojis');
    });

    // Función para adjuntar archivos
    attachButton.addEventListener('click', () => {
        alert('Abrir panel de adjuntar archivos');
    });

    // Función para grabar voz
    voiceButton.addEventListener('click', () => {
        alert('Iniciar grabación de voz');
    });

    // Iniciar grabación de audio
    audioButton.addEventListener('click', function() {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ audio: true })
                .then(function(stream) {
                    mediaRecorder = new MediaRecorder(stream);
                    mediaRecorder.start();
                    audioChunks = [];
                    console.log('Grabación iniciada');

                    mediaRecorder.ondataavailable = function(event) {
                        audioChunks.push(event.data);
                    };

                    mediaRecorder.onstop = function() {
                        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                        // Aquí puedes manejar el audioBlob como desees
                        console.log('Audio grabado listo:', audioBlob);
                    };

                    audioButton.disabled = true;
                    stopButton.disabled = false;
                })
                .catch(function(err) {
                    console.error('Error al acceder al micrófono:', err);
                });
        } else {
            alert('Tu navegador no soporta acceso al micrófono.');
        }
    });

    // Detener grabación
    stopButton.addEventListener('click', function() {
        mediaRecorder.stop();
        console.log('Grabación detenida');
        audioButton.disabled = false;
        stopButton.disabled = true;
    });

