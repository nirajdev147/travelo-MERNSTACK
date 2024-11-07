import React, { useState, useEffect } from 'react';
import '../styles/tourList.css';
import { Container, Row, Col } from 'reactstrap';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';

const TourList = () => {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);

    const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`);
    const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);

    useEffect(() => {
        const pages = Math.ceil(tourCount / 8); //later we will use backend data count
        setPageCount(pages);
        window.scrollTo(0, 0);
    }, [page, tourCount, tours]);

    const deleteTour = (id) => {
        // Logic to delete tour by ID
    };

    const updateTour = (id) => {
        // Placeholder for update tour logic
    };

    return (
        <>
            <section>
                <Container>
                    <Row>
                        {/* Add a search bar here if needed */}
                    </Row>
                </Container>
            </section>
            <section className="pt-0">
                <Container>
                    {loading && <h4 className="text-center pt-5">Loading.....</h4>}
                    {error && <h4 className="text-center pt-5">{error}</h4>}
                    {!loading && !error && (
                        <Row>
                            <Col>
                                <table className="tour-table">
                                    <thead>
                                        <tr>
                                            <th>Serial Number</th>
                                            <th>Title</th>
                                            <th>City</th>
                                            <th>Price</th>
                                            <th>Photo</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tours.map((tour, index) => (
                                            <tr key={tour._id}>
                                                <td>{index + 1}</td>
                                                <td>{tour.title}</td>
                                                <td>{tour.city}</td>
                                                <td>{tour.price}</td>
                                                <td>{tour.photo}</td>
                                                <td>
                                                    <button onClick={() => deleteTour(tour._id)}>Delete</button>
                                                    <button onClick={() => updateTour(tour._id)}>Update</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </Col>
                        </Row>
                    )}
                </Container>
            </section>
            {/* Add newsletter or other components here if needed */}
        </>
    );
};

export default TourList;
