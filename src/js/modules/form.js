import {checkNumInputs} from './checkNumInputs';

export const form = (state) => {
    const forms =  document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]');

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

            if(form.getAttribute('data-calc') === "end"){
                for(let key in state){
                    formData.append(key, state[key]);
                }
            }
            console.log(Array.from(formData));

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