export const form = () => {
    const forms =  document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const phoneInputs = document.querySelectorAll('input[name="user_phone"]');

    phoneInputs.forEach(phoneInput => {
        phoneInput.addEventListener('input', () => {
            phoneInput.value = phoneInput.value.replace(/\D/, '');
        })
    })

    const message = {
        loading: 'Загрузка', 
        success: 'Спасибо! Мы скоро свяжимся с вами.',
        failure: 'Что-то пошло не так...'
    };

    const postData = async (url, data) =>{
        document.querySelector('.status').textContent = message.loading;
        const res = await fetch(url, {
            method: "POST",
            body: data
        });
        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(input => {
            let value = input.value;
            console.log({value});
            input.value = "";
        })
    }

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.appendChild(statusMessage);

            const formData = new FormData(form);

            const url = 'https://randomuser.me/api';

            postData(url, formData)
                .then(res => {
                    console.log({res});
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        })
    })
};