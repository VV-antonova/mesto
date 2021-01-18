
let popupProfileForm = document.querySelector('.popup-box_type_profile-form'), //попап формы
    popupAddCard = document.querySelector('.popup-box_type_add-card'), //попап добавления карточки
    popupImage = document.querySelector('.popup-box_type_image'); //попап просмотра картинки

const inputTypeName = document.querySelector('.popup__input_type_name'), //инпут формы личных данных
    inputTypeJob = document.querySelector('.popup__input_type_job'), //инпут формы личных данных
    formProfile = document.querySelector('.popup-box_type_profile-form'), //попап профиля
    formCard = document.querySelector('.popup__container_type_place'), // форма добавления карточки
    inputTypePlaceName = formCard.querySelector('.popup__input_type_place-name'), //инпут формы добавления карточки
    inputTypeLink = formCard.querySelector('.popup__input_type_link'), //инпут формы добавления карточки
    popupCloseButtons = document.querySelectorAll('.popup__close-button'),
    profileEditButton = document.querySelector('.profile__edit-button'),
    profileAddButton = document.querySelector('.profile__add-button'),
    profileName = document.querySelector('.profile__name'),
    job = document.querySelector('.profile__description'),
    cardsContainer = document.querySelector('.cards'), //контейнер для карточек
    cardTemplate = document.querySelector('#card-template').content; //шаблон карточки


//Функции

//открытие попапа
function openPopup(popup) {
    popup.classList.add('popup_opened');
}    

//закрытие попапа
function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

//создание карточки
function addCard (card) {
    const cardElement = cardTemplate.cloneNode(true),
        likeButton = cardElement.querySelector('.cards__like-button'),
        busket = cardElement.querySelector('.cards__basket-button'),
        cardPic = cardElement.querySelector('.cards__image');
        
        cardPic.src = card.link;
        cardPic.alt = card.name;
        cardElement.querySelector('.cards__title').textContent = card.name;


    likeButton.addEventListener('click', evt => {
        evt.target.classList.toggle('cards__like-button_active');
    });

    busket.addEventListener('click', () => {
        const cardItem = busket.closest('.cards__item');
        cardItem.remove();
    });  

    cardPic.addEventListener('click', evt => {
        if (evt.target === evt.currentTarget) {
            const picture = document.querySelector('.popup__image');
            picture.src = card.link;
            picture.alt = card.name;
            document.querySelector('.popup__caption').textContent = card.name;
            openPopup(popupImage);
        }
    });

    return cardElement;
}

//функция отрисовки карточек
function renderCard(item, container) {
    container.append(addCard(item));
}

//отрисовка всех карточек
initialCards.forEach(item => {
    renderCard(item, cardsContainer);
});

//форма личных данных
function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = inputTypeName.value;
    job.textContent = inputTypeJob.value;

    closePopup(popupProfileForm);
}    

//отрисовка новой карточки
function handleCardFormSubmit(evt) {
    evt.preventDefault();

    cardsContainer.prepend(addCard(inputTypeLink.value, inputTypePlaceName.value));

    formCard.reset();

    closePopup(popupAddCard);
}  


//Обработчики

profileEditButton.addEventListener('click', () => {
    inputTypeName.value = profileName.textContent;
    inputTypeJob.value = job.textContent;
    openPopup(popupProfileForm);
});

profileAddButton.addEventListener('click', () => {
    openPopup(popupAddCard);
});

popupCloseButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        closePopup(btn.closest('.popup-box'));
    });
});

formProfile.addEventListener('submit', handleProfileFormSubmit);

formCard.addEventListener('submit', handleCardFormSubmit);