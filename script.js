let popup = document.querySelector('.popup-box'),
    form = popup.querySelector('.popup__container'),
    popupCloseButton = popup.querySelector('.popup__close-button'),
    profileEditButton = document.querySelector('.profile__edit-button'),
    InputTypeName = form.querySelector('.popup__input_type_name'),
    InputTypeJob = form.querySelector('.popup__input_type_job'),
    name = document.querySelector('.profile__name'),
    job = document.querySelector('.profile__description');

function openPopup() {
    popup.classList.add('popup_opened');

    InputTypeName.value = name.textContent;
    InputTypeJob.value = job.textContent;
}    

function closePopup() {
    popup.classList.remove('popup_opened');
}

function formSubmit(evt) {
    evt.preventDefault();

    name.textContent = InputTypeName.value;
    job.textContent = InputTypeJob.value;

    closePopup();
}    

profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
form.addEventListener('submit', formSubmit);