let popups = document.querySelectorAll('.popup-box'),
    popupProfileForm = document.querySelector('.popup-box_type_profile-form'), //попап формы
    popupAddCard = document.querySelector('.popup-box_type_add-card'), //попап добавления карточки
    popupImage = document.querySelector('.popup-box_type_image'), //попап просмотра картинки
    form = document.querySelector('.popup__container'),
    popupCloseButtons = document.querySelectorAll('.popup__close-button'),
    profileEditButton = document.querySelector('.profile__edit-button'),
    profileAddButton = document.querySelector('.profile__add-button'),
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
        // if (evt.target === evt.currentTarget) {
            // console.log('click');
            // closePopup();
    //     }
    // });
});


form.addEventListener('submit', formSubmit);