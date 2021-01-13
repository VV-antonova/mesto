let popup = document.querySelector('.popup-box'),
    form = popup.querySelector('.popup__container'),
    popupCloseButton = popup.querySelector('.popup__close-button'),
    profileEditButton = document.querySelector('.profile__edit-button'),
    InputTypeName = form.querySelector('.popup__input_type_name'),
    InputTypeJob = form.querySelector('.popup__input_type_job'),
    profileName = document.querySelector('.profile__name'),
    job = document.querySelector('.profile__description'),
    cardsContainer = document.querySelector('.cards');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];    

function openPopup() {
    popup.classList.add('popup_opened');

    InputTypeName.value = profileName.textContent;
    InputTypeJob.value = job.textContent;
}    

function closePopup() {
    popup.classList.remove('popup_opened');
}

function addCard(picLink, nameValue) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.cloneNode(true);

    cardElement.querySelector('.cards__image').src = picLink;
    cardElement.querySelector('.cards__title').textContent = nameValue;

    cardElement.querySelector('.cards__like-button').addEventListener('click', evt => {
        evt.target.classList.toggle('cards__like-button_active');
      });

    cardsContainer.append(cardElement);
}

initialCards.forEach(item => {
    addCard(item.link, item.name);
});

function formSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = InputTypeName.value;
    job.textContent = InputTypeJob.value;

    closePopup();
}    

profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
form.addEventListener('submit', formSubmit);