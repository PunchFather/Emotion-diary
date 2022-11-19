export const getStringDate = (date) => {
    return date.toISOString().slice(0, 10);
    // ex. 202219~~ 여기서 0부터 10까지 끊으면 날짜까지 끊김
};