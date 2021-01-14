let popups = document.querySelectorAll('.popup-box'),
    popupProfileForm = document.querySelector('.popup-box_type_profile-form'), //попап формы
    InputTypeName = document.querySelector('.popup__input_type_name'), //инпут формы личных данных
    InputTypeJob = document.querySelector('.popup__input_type_job'), //инпут формы личных данных
    popupAddCard = document.querySelector('.popup-box_type_add-card'), //попап добавления карточки
    popupImage = document.querySelector('.popup-box_type_image'), //попап просмотра картинки
    formProfile = document.querySelector('.popup-box_type_profile-form'),
    formCard = popupAddCard.querySelector('.popup__container_type_place'), // форма добавления карточки
    InputTypePlaceName = formCard.querySelector('.popup__input_type_place-name'), //инпут формы добавления карточки
    InputTypeLink = formCard.querySelector('.popup__input_type_link'), //инпут формы добавления карточки
    popupCloseButtons = document.querySelectorAll('.popup__close-button'),
    profileEditButton = document.querySelector('.profile__edit-button'),
    profileAddButton = document.querySelector('.profile__add-button'),
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

//Функции

function togglePopup(popup) {
    popup.classList.add('popup_opened');

    InputTypeName.value = profileName.textContent;
    InputTypeJob.value = job.textContent;
}    

function closePopup() {
    popups.forEach(popup => {
        popup.classList.remove('popup_opened');
    });
    
}

function addCard(picLink, nameValue) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.cloneNode(true);
    const busket = cardElement.querySelector('.cards__basket-button');

    cardElement.querySelector('.cards__image').src = picLink;
    cardElement.querySelector('.cards__title').textContent = nameValue;

    cardElement.querySelector('.cards__like-button').addEventListener('click', evt => {
        evt.target.classList.toggle('cards__like-button_active');
      });

    busket.addEventListener('click', () => {
        const cardItem = busket.closest('.cards__item');
        cardItem.remove();
    });  

    cardsContainer.append(cardElement);
}

initialCards.forEach(item => {
   addCard(item.link, item.name);
});

function profileFormSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = InputTypeName.value;
    job.textContent = InputTypeJob.value;

    closePopup();
}    

function cardFormSubmit(evt) {
    evt.preventDefault();

    initialCards.unshift(addCard(InputTypeLink.value, InputTypePlaceName.value));

    InputTypeLink.value = '';
    InputTypePlaceName.value = '';

    closePopup();
}  

//Обработчики

profileEditButton.addEventListener('click', evt => {
    if (evt.target === evt.currentTarget) {
        togglePopup(popupProfileForm);
    }
});

profileAddButton.addEventListener('click', evt => {
    if (evt.target === evt.currentTarget) {
        togglePopup(popupAddCard);
    }
});

popupCloseButtons.forEach(btn => {
    btn.addEventListener('click', closePopup);
});

formProfile.addEventListener('submit', profileFormSubmit);

formCard.addEventListener('submit', cardFormSubmit);

