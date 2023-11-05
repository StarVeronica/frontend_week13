const btn = document.getElementById("btn");

const input = document.getElementById("date");

input.addEventListener('focusout', function(evt) {
    const answer = document.getElementById("message");
    if (answer.style.color === "red" && input.value) {
        answer.textContent = "";
    }
});

btn.addEventListener('click', function(evt) {
    const answer = document.getElementById("message");
    const input = document.getElementById("date").value;
    if (input) {
        const birthday = new Date(document.getElementById("date").value);
        const today = new Date();
        const message = Math.round(((birthday - today)) / 1000 / 60 / 60 / 24);
        if (message === -1) {
            answer.style.color = "green";
            answer.textContent = "С Днём Рождения!";
        } else {
            answer.style.color = "black";
            if (message === 0) {
                answer.textContent = "Завтра у вас День Рождения!";
            } else if (message === 1) {
                answer.textContent = `До вашего Дня Рождения остался ${message} день`;
            } else if (message % 100 >= 10 && message % 100 <= 20 || message % 10 > 4 || message % 10 === 0) {
                answer.textContent = `До вашего Дня Рождения осталось ${message} дней`;
            } else if (message % 10 > 1 && message % 10 < 5) {
                answer.textContent = `До вашего Дня Рождения осталось ${message} дня`;
            } else {
                answer.textContent = `До вашего Дня Рождения осталось ${message} день`;
            }
        }
    } else {
        const message = "Пожалуйста, введите дату рождения";
        answer.style.color = "red";
        answer.textContent = message;
    }
});
