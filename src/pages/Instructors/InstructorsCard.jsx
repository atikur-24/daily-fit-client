const InstructorsCard = ({ instructor }) => {
    const { name, img, email } = instructor;
    return (
        <div>
            <img className="h-[320px] w-full" src={img} alt="trainer" />
            <div className="bg-[#565656] text-xl text-white py-5 px-3 space-y-2">
                <p className="text-xl">{name}</p>
                <p className="text-gray-300 text-[14px] tracking-wide border-b-2 border-gray-400">{email}</p>
            </div>
        </div>
    );
};

export default InstructorsCard;