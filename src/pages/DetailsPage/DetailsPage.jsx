import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCars } from "../../redux/cars/operations";
import DetailsCard from "../../components/DetailsCard/DetailsCard";

const DetailsPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        //dispatch(fetchCars(id))
    }, [])
    return (
        <main>
            <DetailsCard />
            
        </main>
    )
    
};

export default DetailsPage;
