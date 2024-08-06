let noBtn = document.getElementById('noBtn');
let yesBtn = document.getElementById('yesBtn');
let noClickCount = 0;

function redirectToYayPage() {
    window.location.href = 'yay.html';
}

noBtn.addEventListener('click', () => {
    noClickCount++;
    if (noClickCount < 6) {
        yesBtn.style.transform = `scale(${1 + noClickCount * 0.2})`;
    } else {
        noBtn.innerHTML = "Yes";
        noBtn.removeEventListener('click', handleNoClick);
        noBtn.addEventListener('click', redirectToYayPage);
    }
});

yesBtn.addEventListener('click', redirectToYayPage);

function handleNoClick() {
    noClickCount++;
    if (noClickCount < 6) {
        yesBtn.style.transform = `scale(${1 + noClickCount * 0.2})`;
    } else {
        noBtn.innerHTML = "Yes";
        noBtn.removeEventListener('click', handleNoClick);
        noBtn.addEventListener('click', redirectToYayPage);
    }
}

noBtn.addEventListener('click', handleNoClick);
