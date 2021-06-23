const button = document.querySelector(`.form__btn`);

button.addEventListener(`click`, () => {
    const inptEmail = document.querySelector(`.form__email`);
    inptEmail.checkValidity() ? inptEmail.classList.remove(`form__email--error`) : inptEmail.classList.add(`form__email--error`);
});