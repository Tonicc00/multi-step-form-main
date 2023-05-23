

// Personal info check

const fullNameRegex = /^([\w]{3,})+\s+([\w\s]{3,})+$/i;
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneNumberRegex = /^[+1][0-9]{7}/;
const fullNameInput = document.getElementById('full-name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const nextBtnOne = document.getElementById('next-btn-one')
const sectionOne = document.getElementById('sectionOne');
const sectionTwo = document.getElementById('sectionTwo');
const sectionThree = document.getElementById('sectionThree');
const sectionFour = document.getElementById('sectionFour');
const sectionFive = document.getElementById('sectionFive');

const stepOne = document.getElementById('step1');
const stepTwo = document.getElementById('step2');
const stepThree = document.getElementById('step3');
const stepFour = document.getElementById('step4');

function getPersonalInfo() {
        if(fullNameInput.value.match(fullNameRegex) && emailInput.value.match(emailRegex) && phoneInput.value.match(phoneNumberRegex)){
            sectionTwo.style.visibility = 'visible';
            sectionOne.style.visibility = 'hidden';
            stepOne.style.backgroundColor = 'transparent'
            stepTwo.style.backgroundColor = 'hsl(229, 24%, 87%)'
        } else {
            alert('Looks like some information are missing. Please check again!')
        }
}

// Subscription option

function getSubscription() {
    if(monthlyPrice || yearlyPrice){
        sectionTwo.style.visibility = 'hidden';
        sectionThree.style.visibility = 'visible';
        stepTwo.style.backgroundColor = 'transparent'
        stepThree.style.backgroundColor = 'hsl(229, 24%, 87%)'
    } else {
        alert('Looks like some information are missing. Please select subscription!')
    }
}

// Additional options

const addonsBtn = document.getElementById('addonsBtn');

function getAddons(){
    addonsBtn.addEventListener('click', () => {
        sectionThree.style.visibility = 'hidden';
        sectionFour.style.visibility = 'visible';
        stepThree.style.backgroundColor = 'transparent'
        stepFour.style.backgroundColor = 'hsl(229, 24%, 87%)'
    })
}

// FInish purchase

const finishPurchase = document.getElementById('finishPurchase');
function getFinishPurchase() {
    finishPurchase.addEventListener('click', () => {
        sectionFour.style.visibility = 'hidden';
        sectionFive.style.visibility = 'visible';
    })
}

// Go back

const goBackBtnOne = document.getElementById('goBackBtnOne');
const goBackBtnTwo = document.getElementById('goBackBtnTwo');
const goBackBtnThree = document.getElementById('goBackBtnThree');

function getGoBack() {
    goBackBtnOne.addEventListener('click', () => {
        sectionOne.style.visibility = 'visible';
        sectionTwo.style.visibility = 'hidden';
        stepTwo.style.backgroundColor = 'transparent'
        stepOne.style.backgroundColor = 'hsl(229, 24%, 87%)'
    })
    goBackBtnTwo.addEventListener('click', () => {
        sectionTwo.style.visibility = 'visible';
        sectionThree.style.visibility = 'hidden';
        stepThree.style.backgroundColor = 'transparent'
        stepTwo.style.backgroundColor = 'hsl(229, 24%, 87%)'
    })
    goBackBtnThree.addEventListener('click', () => {
        sectionThree.style.visibility = 'visible';
        sectionFour.style.visibility = 'hidden';
        stepFour.style.backgroundColor = 'transparent'
        stepThree.style.backgroundColor = 'hsl(229, 24%, 87%)'
    })
}

// PRICES

const checkboxOne = document.getElementById('checkbox-one');
const checkboxTwo = document.getElementById('checkbox-two');
const checkboxThree = document.getElementById('checkbox-three');

const arcadeBtn = document.getElementById('arcadeBtn');
const advancedBtn = document.getElementById('advancedBtn');
const proBtn = document.getElementById('proBtn');

const checkoutOption = document.getElementById('checkoutOption');
const checkoutPrice = document.getElementById('checkoutPrice');
const checkoutService = document.getElementById('checkoutService');
const checkoutStorage = document.getElementById('checkoutStorage');
const customizableProfile = document.getElementById('customizableProfile');
const checkoutTotal = document.getElementById('checkoutTotal');

const arcadeSub = document.getElementById('arcadeSub');
const advancedSub = document.getElementById('advancedSub');
const proSub = document.getElementById('proSub');

let span = document.getElementById('totalSpan')
const arcSpan = document.getElementById('arcSpan')
const advSpan = document.getElementById('advSpan')
const proSpan = document.getElementById('proSpan')

const arcadeMo = 9;
const advancedMo = 12;
const proMo = 15;

const arcadeYr = 90;
const advancedYr = 120;
const proYr = 150;

let one = 1;
let two = 2;
const ten = 10;
const twenty = 20;
let total = 0;


function monthlyPrice() {
    document.getElementById('arcadePrice').innerHTML = `$${arcadeMo}/mo`;
    document.getElementById('advancedPrice').innerHTML = `$${advancedMo}/mo `;
    document.getElementById('proPrice').innerHTML = `$${proMo}/mo`;
    
    document.getElementById('h4-arc').innerHTML = `+$${one}/mo`;
    document.getElementById('h4-adv').innerHTML = `+$${two}/mo`;
    document.getElementById('h4-pro').innerHTML = `+$${two}/mo`;
}

function yearlyPrice() {
    document.getElementById('arcadePrice').innerHTML = `$${arcadeYr}/yr + 2 months free`;
    document.getElementById('advancedPrice').innerHTML = `$${advancedYr}/yr + 2 months free`;
    document.getElementById('proPrice').innerHTML = `$${proYr}/yr + 2 months free`;

    document.getElementById('h4-arc').innerHTML = `+$${ten}/yr`;
    document.getElementById('h4-adv').innerHTML = `+$${twenty}/yr`;
    document.getElementById('h4-pro').innerHTML = `+$${twenty}/yr`;

    arcSpan.innerHTML = `${arcadeYr}/yr`
    advSpan.innerHTML = `${advancedYr}/yr`
    proSpan.innerHTML = `${proYr}/yr`
}

function optionOne(){
    arcadeBtn.addEventListener('click', () => {
        checkoutOption.innerHTML = arcadeSub.innerText;
        span.innerHTML = arcSpan.innerText;
        arcadeBtn.style.border = '2px solid hsl(213, 96%, 18%)'
        arcadeBtn.style.backgroundColor = 'white'
        advancedBtn.style.backgroundColor = 'hsl(206, 94%, 87%)'
        proBtn.style.backgroundColor = 'hsl(206, 94%, 87%)'
        advancedBtn.style.border = 'none'
        proBtn.style.border = 'none'
    })
}
function optionTwo(){
    advancedBtn.addEventListener('click', () => {
        checkoutOption.innerHTML = advancedSub.innerText;
        span.innerHTML = advSpan.innerText;
        advancedBtn.style.border = '2px solid hsl(213, 96%, 18%)'
        advancedBtn.style.backgroundColor = 'white'
        arcadeBtn.style.backgroundColor = 'hsl(206, 94%, 87%)'
        proBtn.style.backgroundColor = 'hsl(206, 94%, 87%)'
        arcadeBtn.style.border = 'none'
        proBtn.style.border = 'none'
    })
}
function optionThree() {
    proBtn.addEventListener('click', () => {
        checkoutOption.innerHTML = proSub.innerText;
        span.innerHTML = proSpan.innerText;
        proBtn.style.border = '2px solid hsl(213, 96%, 18%)'
        proBtn.style.backgroundColor = 'white'
        
        advancedBtn.style.backgroundColor = 'hsl(206, 94%, 87%)'
        arcadeBtn.style.backgroundColor = 'hsl(206, 94%, 87%)'
        advancedBtn.style.border = 'none'
        arcadeBtn.style.border = 'none'
    })
}

function isChecked(){
    if((checkboxOne.checked && checkboxTwo.checked && checkboxThree.checked) && optionOne){
        total = (one += (two * 2));
        span.innerHTML = `${total += arcadeMo}/mo`;
        checkoutService.innerHTML = '$1/mo'
        checkoutStorage.innerHTML = '$2/mo'
        customizableProfile.innerHTML = '$2/mo'

    } else if ((checkboxOne.checked && checkboxTwo.checked) && optionOne){
        total = (one += two);
        span.innerHTML = `${total += arcadeMo}/mo`;
        checkoutService.innerHTML = '$1/mo'
        checkoutStorage.innerHTML = '$2/mo'

    } else if ((checkboxOne.checked && checkboxThree.checked) && optionOne){
        total = (one += two);
        span.innerHTML = `${total += arcadeMo}/mo`;
        checkoutService.innerHTML = '$1/mo'
        customizableProfile.innerHTML = '$2/mo'

    } else if ((checkboxTwo.checked && checkboxThree.checked) && optionOne){
        total = (two += two);
        span.innerHTML = `${total += arcadeMo}/mo`;
        checkoutStorage.innerHTML = '$2/mo'
        customizableProfile.innerHTML = '$2/mo'

    } else if((checkboxOne.checked && checkboxTwo.checked && checkboxThree.checked) && optionTwo){
        total = (one += (two * 2));
        span.innerHTML = `${total += advancedMo}/mo`;
        checkoutService.innerHTML = '$1/mo'
        checkoutStorage.innerHTML = '$2/mo'
        customizableProfile.innerHTML = '$2/mo'

    } else if ((checkboxOne.checked && checkboxTwo.checked) && optionTwo){
        total = (one += two);
        span.innerHTML = `${total += advancedMo}/mo`;
        checkoutService.innerHTML = '$1/mo'
        checkoutStorage.innerHTML = '$2/mo'

    } else if ((checkboxOne.checked && checkboxThree.checked) && optionTwo){
        total = (one += two);
        span.innerHTML = `${total += advancedMo}/mo`;
        checkoutService.innerHTML = '$1/mo'
        customizableProfile.innerHTML = '$2/mo'

    } else if ((checkboxTwo.checked && checkboxThree.checked) && optionTwo){
        total = (two += two);
        span.innerHTML = `${total += advancedMo}/mo`;
        customizableProfile.innerHTML = '$2/mo'
        checkoutStorage.innerHTML = '$2/mo'
    
    } else if((checkboxOne.checked && checkboxTwo.checked && checkboxThree.checked) && optionThree){
        total = (one += (two * 2));
        span.innerHTML = `${total += proMo}/mo`;
        checkoutService.innerHTML = '$1/mo'
        checkoutStorage.innerHTML = '$2/mo'
        customizableProfile.innerHTML = '$2/mo'
    
    } else if ((checkboxOne.checked && checkboxTwo.checked) && optionThree){
        total = (one += two);
        span.innerHTML = `${total += proMo}/mo`;
        checkoutService.innerHTML = '$1/mo'
        checkoutStorage.innerHTML = '$2/mo'
    
    } else if ((checkboxOne.checked && checkboxThree.checked) && optionThree){
        total = (one += two);
        span.innerHTML = `${total += proMo}/mo`;
        checkoutService.innerHTML = '$1/mo'
        customizableProfile.innerHTML = '$2/mo'
    
    } else if ((checkboxTwo.checked && checkboxThree.checked) && optionThree){
        total = (two += two);
        span.innerHTML = `${total += proMo}/mo`;
        customizableProfile.innerHTML = '$2/mo'
        checkoutStorage.innerHTML = '$2/mo'

    } else if (checkboxOne.checked && optionOne){
        span.innerHTML = `10/mo`;
        checkoutService.innerHTML = '$1/mo'
    } else if (checkboxOne.checked && optionTwo){
        span.innerHTML = `13/mo`;
        checkoutService.innerHTML = '$1/mo'
    } else if (checkboxOne.checked && optionThree){
        span.innerHTML = `16/mo`;
        checkoutService.innerHTML = '$1/mo'
    } else if (checkboxTwo.checked && optionOne){
        span.innerHTML = `11/mo`;
        checkoutStorage.innerHTML = '$2/mo'
    } else if (checkboxTwo.checked && optionTwo){
        span.innerHTML = `14/mo`;
        checkoutStorage.innerHTML = '$2/mo'
    } else if (checkboxTwo.checked && optionThree){
        span.innerHTML = `17/mo`;
        checkoutStorage.innerHTML = '$2/mo'
    } else if (checkboxThree.checked && optionOne){
        span.innerHTML = `11/mo`;
        customizableProfile.innerHTML = '$2/mo'
    } else if (checkboxThree.checked && optionTwo){
        span.innerHTML = `14/mo`;
        customizableProfile.innerHTML = '$2/mo'
    } else if (checkboxThree.checked && optionThree){
        span.innerHTML = `17/mo`;
        customizableProfile.innerHTML = '$2/mo'
    }
}

function getStep() {
    if(sectionOne){
        stepOne.style.backgroundColor = ' hsl(229, 24%, 87%)'
    } else if(sectionTwo){
        stepTwo.style.backgroundColor = ' hsl(229, 24%, 87%)'
    } else if(sectionThree){
        stepThree.style.backgroundColor = ' hsl(229, 24%, 87%)'
    } else if(sectionFour){
        stepFour.style.backgroundColor = ' hsl(229, 24%, 87%)'
    }
}
getStep();