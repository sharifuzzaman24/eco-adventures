import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NotFoundPage from "./NotFoundPage";

const AdventureDetailsPage = () => {
    const { id } = useParams();
    // Fetch adventure data based on the ID (use static data for now)
    const adventureData = useLoaderData();
    

    const adventure = adventureData.find((adventure) => adventure.id === parseInt(id));

    if (!adventure) {
        return <NotFoundPage></NotFoundPage>;
    }

    return (
        <>
            <Navbar></Navbar>
            <div className="bg-[#E6F9F1] min-h-screen pt-20">
            <div className="w-11/12 mx-auto py-8">
                {/* Adventure Header */}
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="w-full lg:w-1/2">
                        <img
                            src={adventure.image}
                            alt={adventure.title}
                            className="w-full h-80 object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="flex flex-col justify-between w-full lg:w-1/2">
                        <h1 className="text-4xl font-semibold text-[#2ECC71]">{adventure.title}</h1>
                        <p className="text-lg mt-4 text-gray-700">{adventure.shortDescription}</p>
                        <p className="text-md text-[#f39c12] mt-4">Location: {adventure.location}</p>
                        <p className="text-md text-[#f39c12] mt-2">Duration: {adventure.duration}</p>
                        <p className="text-md text-[#f39c12] mt-2">Cost: ${adventure.cost}</p>
                        <p className="text-md text-[#f39c12] mt-2">Adventure Level: {adventure.adventureLevel}</p>
                        <button className="bg-[#3498DB] text-white py-2 px-6 rounded-lg mt-6 hover:bg-[#F39C12]">
                            Talk with Expert
                        </button>
                    </div>
                </div>

                {/* Adventure Details Section */}
                <div className="mt-8">
                    <h2 className="text-3xl font-semibold text-[#2ECC71] mb-4">Included Items</h2>
                    <ul className="list-disc ml-6 text-lg text-gray-700">
                        {adventure.includedItems.map((item, index) => (
                            <li key={index} className="mb-2">{item}</li>
                        ))}
                    </ul>

                    <h2 className="text-3xl font-semibold text-[#2ECC71] mt-8 mb-4">Eco-Friendly Features</h2>
                    <ul className="list-disc ml-6 text-lg text-gray-700">
                        {adventure.ecoFriendlyFeatures.map((feature, index) => (
                            <li key={index} className="mb-2">{feature}</li>
                        ))}
                    </ul>

                    <h2 className="text-3xl font-semibold text-[#2ECC71] mt-8 mb-4">Special Instructions</h2>
                    <ul className="list-disc ml-6 text-lg text-gray-700">
                        {adventure.specialInstructions.map((instruction, index) => (
                            <li key={index} className="mb-2">{instruction}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default AdventureDetailsPage;
