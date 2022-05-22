export const formatDate = (date) => {
    const monthNames = [
        "",
        "Янв",
        "Фев",
        "Мар",
        "Апр",
        "Май",
        "Июнь",
        "Июль",
        "Авг",
        "Сеп",
        "Окт",
        "Ноя",
        "Дек",
    ];

    const [year, month, day] = date.split("-"); // 2022-02-25

    return `${monthNames[parseInt(month)]} ${day}, ${year}`;
};
