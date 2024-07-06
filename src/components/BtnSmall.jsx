
const BtnSmall = ({func,title}) => {
    return (
        <button onClick={func} className="font-medium text-white text-sm md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-primary text-center hover:bg-transparent border-2 border-primary hover:border-primary hover:text-primary transition-all duration-300 ">
            {title}
        </button>

    );
};

export default BtnSmall;