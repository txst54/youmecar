import carImage from "../assets/car.png";

export default function LandingPage(props) {
    return (
        <div className="h-screen flex flex-col">
            <div className="flex-1 bg-youmeblue flex flex-col items-center pt-20">
                <div className="flex justify-center items-center">
                    <p className="text-slate-700 text-8xl font-extrabold z-['Avenir'] underline underline-offset-8 text-center">youmecar</p>
                    <img src={carImage} alt="Landing Car Page" className="w-1/4 ml-4"/>
                </div>
            </div>
        </div>

    );
}