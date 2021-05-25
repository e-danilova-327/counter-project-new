let i = 0;

const plusOne = () => {
    document.getElementById('intNumb').value = ++i;
};

const minusOne = () => {
    if (i > 0) {
        document.getElementById('intNumb').value = --i;
    } else {
        alert('Counter should be a positive number!');
    }
};
