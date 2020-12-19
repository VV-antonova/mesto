let popup = document.querySelector('.popup'),
    form = popup.querySelector('.popup__container'),
    popupCloseButton = popup.querySelector('.popup__close-button'),
    profileEditButton = document.querySelector('.profile__edit-button');

function openPopup() {
    popup.classList.add('popup_opened');
}    

function closePopup() {
    popup.classList.remove('popup_opened');
}

profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

function formSubmit(evt) {
    evt.preventDefault();

    let InputTypeName = form.querySelector('.popup__input_name'),
        InputTypeJob = form.querySelector('.popup__input_job'),
        name = document.querySelector('.profile__name'),
        job = document.querySelector('.profile__description');

    name.textContent = InputTypeName.value;
    job.textContent = InputTypeJob.value;

    InputTypeName.value = '';
    InputTypeJob.value = '';

    closePopup();
}    

form.addEventListener('submit', formSubmit);