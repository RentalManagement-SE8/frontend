import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Landing from '../components/home/Landing';
import SearchBar from '../components/search/SearchBar';
import { rentalService } from '../services/rentalService';
import { serviceService } from '../services/serviceService';
import RentalListing from '../components/rental/RentalListing';
import ServiceListing from '../components/services/ServiceListing';

const HomePage = () => {
    const [featuredRentals, setFeaturedRentals] = useState([]);
    const [popularServices, setPopularServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFeaturedItems = async () => {
            try {
                setLoading(true);
                // Fetch featured rentals and services
                const [rentalsResponse, servicesResponse] = await Promise.all([
                    rentalService.getFeaturedRentals(),
                    serviceService.getPopularServices()
                ]);

                setFeaturedRentals(rentalsResponse.data);
                setPopularServices(servicesResponse.data);
            } catch (error) {
                console.error('Error fetching featured items:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchFeaturedItems();
    }, []);

    return (
        <div className="home-page">
            <Landing />

            <section className="search-section py-8">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-6">Find What You Need</h2>
                    <SearchBar />
                </div>
            </section>

            <section className="featured-rentals py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">Featured Rentals</h2>
                        <Link to="/search?type=rental" className="text-blue-600 hover:underline">View All</Link>
                    </div>

                    {loading ? (
                        <div className="flex justify-center">
                            <p>Loading featured rentals...</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {featuredRentals.map(rental => (
                                <RentalListing key={rental._id} rental={rental} />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <section className="popular-services py-12">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">Popular Services</h2>
                        <Link to="/search?type=service" className="text-blue-600 hover:underline">View All</Link>
                    </div>

                    {loading ? (
                        <div className="flex justify-center">
                            <p>Loading popular services...</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {popularServices.map(service => (
                                <ServiceListing key={service._id} service={service} />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <section className="cta-section py-16 bg-blue-600 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Ready to List Your Property or Service?</h2>
                    <p className="mb-6 max-w-2xl mx-auto">Join thousands of owners who are successfully renting their properties and offering services on our platform.</p>
                    <Link to="/register?type=owner" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300">
                        Become an Owner
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;