import FeaturesCard from "./FeaturesCard";
const Features = ({ data }) => {
    return (
        <div className="featureContainer">
            <h2>Why we are loved</h2>
            <div className="featuresContent">
                {data.map((person) => (
                    <FeaturesCard
                        title={person.title}
                        subTitle={person.subTitle}
                        icon={person.icon}
                        color={person.color}
                    />
                ))}
                
            </div>
        </div>
    );
};

export default Features;