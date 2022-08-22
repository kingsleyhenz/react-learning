const FeaturesCard = ({ color, icon, title, subTitle }) => {
    return (
        <div className="card">
            <i
                class="material-symbols-outlined"
                style={{ backgroundColor: color }}
            >
                {icon}
            </i>
            <h3>{title}</h3>
            <p>{subTitle}</p>
        </div>
    );
};

export default FeaturesCard;