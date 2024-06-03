import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const mockBooks = [
    { id: 1, title: "The Great Gatsby" },
    { id: 2, title: "Moby Dick" },
    { id: 3, title: "To Kill a Mockingbird" },
    { id: 4, title: "1984" },
    { id: 5, title: "Pride and Prejudice" },
];

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true); // Mark the form as submitted
        if (searchQuery.trim() !== '') {
            // Filter the mock data based on the search query
            const results = mockBooks.filter(book => 
                book.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    };

    return (
        <div className="my-10 flex flex-col items-center justify-center">
            <form onSubmit={handleSubmit} className="relative w-2/4 md:w-3/4 lg:w-3/4 mb-5">
                <input 
                    type="text" 
                    placeholder="Search book here" 
                    value={searchQuery}
                    onChange={handleInputChange}
                    className="text-center input input-bordered w-full pr-10"
                />
                <button type="submit" className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500">
                    <FaSearch aria-label="Search" />
                </button>
            </form>
            <div className="w-2/4 md:w-3/4 lg:w-3/4">
                {searchResults.length > 0 ? (
                    <ul className="list-disc pl-5">
                        {searchResults.map(book => (
                            <li key={book.id}>{book.title}</li>
                        ))}
                    </ul>
                ) : (
                    isSubmitted && <p>No results found</p> // Show only after form submission
                )}
            </div>
        </div>
    );
};

export default Search;
