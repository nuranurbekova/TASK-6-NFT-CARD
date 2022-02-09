//-----BODY
const body = document.querySelector('body')

body.style.fontFamily = 'Outfit';
body.style.fontSize = '18px';
body.style.backgroundColor = 'hsl(217, 54%, 11%)';
body.style.height = '100vh';
body.style.margin = '0';

//-----WRAPPER
const wrapper = document.createElement("div");
wrapper.id = ('wrapper');

wrapper.style.maxWidth = '1440px';
wrapper.style.display = 'flex';
wrapper.style.flexWrap = 'wrap';
wrapper.style.justifyContent = 'center';
wrapper.style.alignItems = 'center';
wrapper.style.height = '100vh';
wrapper.style.margin = '0 auto';
body.appendChild(wrapper)

//-----CARD WRAPPER
const cardWrapper = document.createElement('div');
cardWrapper.className = ('card-wrapper');

cardWrapper.style.width = '300px';
cardWrapper.style.backgroundColor = 'hsl(216, 50%, 16%)';
cardWrapper.style.borderRadius = '10px';
cardWrapper.style.padding = '20px';
cardWrapper.style.boxShadow = '0 20px 25px 15px rgba(0, 0, 0, 0.05), 0 40px 30px 15px rgba(0, 0, 0, 0.1)'
wrapper.appendChild(cardWrapper);

//-----MAIN IMAGE
const image = document.createElement('img');
image.className = ('image');

image.src = './images/bg.jpg';
image.style.width = '300px';
image.style.height = '300px';
image.style.backgroundPosition = 'center';
image.style.backgroundSize = 'cover';
image.style.backgroundRepeat = 'no-repeat';
image.style.borderRadius = '8px';
cardWrapper.appendChild(image);

//-----MAIN TITLE
const cardTitle = document.createElement('h3');
cardTitle.className = ('card-title');

cardTitle.innerText = ('Equilibrium #3429');
cardTitle.style.color = '#fff'
cardWrapper.appendChild(cardTitle);

//-----MAIN DESCRIPTION
const cardDescription = document.createElement('p');
cardDescription.className = ('card-description');

cardDescription.innerText = "Our Equilibrium collection promotes balance and calm.";
cardDescription.style.color = 'hsl(215, 32%, 27%)';
cardWrapper.appendChild(cardDescription);

//-----ETHEREUM SECTION
const ethWrapper = document.createElement('div');
ethWrapper.className = ('eth-wrapper');

ethWrapper.style.display = 'flex';
ethWrapper.style.alignItems = 'center';
ethWrapper.style.borderBottom = '1px solid hsl(215, 32%, 27%)';
ethWrapper.style.paddingBottom = '20px'
cardWrapper.appendChild(ethWrapper)


const ethIcon = document.createElement('img');
ethIcon.className = ('eth-icon');

ethIcon.src = './images/icon-ethereum.svg';
ethWrapper.appendChild(ethIcon);


const ethPrice = document.createElement('span');
ethPrice.className = ('eth-price');

ethPrice.innerText = ('0.041 ETH');
ethPrice.style.color = 'hsl(178, 100%, 50%)';
ethPrice.style.paddingLeft = '10px';
ethPrice.style.marginRight = '80px';
ethWrapper.appendChild(ethPrice);


const ethIcon2 = document.createElement('img');
ethIcon2.className = ('eth-icon2');

ethIcon2.src = './images/icon-clock.svg';
ethWrapper.appendChild(ethIcon2);


const ethTime = document.createElement('span');
ethTime.className = ('eth-time');

ethTime.innerText = ('3 days left');
ethTime.style.color = 'hsl(215, 32%, 27%)'
ethTime.style.paddingLeft = '10px'
ethWrapper.appendChild(ethTime);

//-----AUTHOR SECTION
const authorContainer = document.createElement('div');
authorContainer.className = ('author-container');

authorContainer.style.display = 'flex';
authorContainer.style.alignItems = 'center';
authorContainer.style.padding = '20px 0'
cardWrapper.appendChild(authorContainer);


const avatarImage = document.createElement('img');
avatarImage.classList = ('avatar-img');

avatarImage.src = './images/image-avatar.png';
avatarImage.style.width = '32px';
avatarImage.style.border = '1px solid #fff';
avatarImage.style.borderRadius = '50%'
authorContainer.appendChild(avatarImage);


const createdBy = document.createElement('span');
createdBy.className = ('created-by');

createdBy.innerText = ('Creation of');
createdBy.style.color = 'hsl(215, 32%, 27%)'
createdBy.style.padding = '0 10px 0 10px';
authorContainer.appendChild(createdBy);


const authorName = document.createElement('span');
authorName.className = ('author-name');
authorName.innerText = ('Jules Wyvern');

authorName.style.color = '#fff';
authorContainer.appendChild(authorName)


alert("Я оцениваю свою работу на 110 баллов")