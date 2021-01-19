const popupAddCard = document.querySelector('.popup-box_type_add-card'); //попап добавления карточки
const popupImage = document.querySelector('.popup-box_type_image'); //попап просмотра картинки
const popupProfileForm = document.querySelector('.popup-box_type_profile-form'); //попап формы
const inputTypeName = document.querySelector('.popup__input_type_name'); //инпут формы личных данных
const inputTypeJob = document.querySelector('.popup__input_type_job'); //инпут формы личных данных
const formCard = document.querySelector('.popup__container_type_place'); // форма добавления карточки
const inputTypePlaceName = formCard.querySelector('.popup__input_type_place-name'); //инпут формы добавления карточки
const inputTypeLink = formCard.querySelector('.popup__input_type_link'); //инпут формы добавления карточки
const popupCloseButtons = document.querySelectorAll('.popup__close-button');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const job = document.querySelector('.profile__description');
const cardsContainer = document.querySelector('.cards'); //контейнер для карточек
const cardTemplate = document.querySelector('#card-template').content; //шаблон карточки
const picture = document.querySelector('.popup__image'); //изображение попапа просмотра картинки
const picCaption = document.querySelector('.popup__caption'); //подпись изображения попапа просмотра картинки


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
    const cardElement = cardTemplate.cloneNode(true);
    const likeButton = cardElement.querySelector('.cards__like-button');
    const deleteButton = cardElement.querySelector('.cards__basket-button');
    const cardPic = cardElement.querySelector('.cards__image');
        
    cardPic.src = card.link;
    cardPic.alt = card.name;
    cardElement.querySelector('.cards__title').textContent = card.name;

    likeButton.addEventListener('click', evt => {
        evt.target.classList.toggle('cards__like-button_active');
    });

    deleteButton.addEventListener('click', () => {
        const cardItem = deleteButton.closest('.cards__item');
        cardItem.remove();
    });  

    cardPic.addEventListener('click', () => {
        picture.src = card.link;
        picture.alt = card.name;
        picCaption.textContent = card.name;
        openPopup(popupImage);
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

    cardsContainer.prepend(addCard({link: inputTypeLink.value, name: inputTypePlaceName.value}));

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

popupProfileForm.addEventListener('submit', handleProfileFormSubmit);

formCard.addEventListener('submit', handleCardFormSubmit);