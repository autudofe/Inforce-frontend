export const getDateNow = () => {
    const date = new Date();
    const options = {
        hour: "numeric",
        minute: "numeric",
        year: "numeric",
        month: "numeric",
        day: "numeric",
    };
    return date.toLocaleString("ru-RU", options).toString();
};