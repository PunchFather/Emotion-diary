const MyButton = ({ text, type, onClick }) => {

    const btnType = ['positive', 'negative'].includes(type) ? type : 'default';
    // type안에 positive나 negative가 포함되어 있다면 type 그대로 내보내고, 그게 아니라면 defalut값을 내보내라

    return (
        <button className={["MyButton", `MyButton_${btnType}`].join(" ")} onClick={onClick}>
            {text}
        </button>
    )
}

MyButton.defaultProps = {
    type: "default",
};

export default MyButton;