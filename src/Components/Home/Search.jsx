import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Card from "../Card";

const mockBooks = [
    { id: 1, 
      title: "The Great Gatsby", 
      author: "F. Scott Fitzgerald",
      image: "2wCEAAkGBxMTEhUTExMVFhUXGBgaFxgVGBgdHRoYHxgYGhUYIBcYHSggHh0lHRcaITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy8mICUtKzUtLS01Ly0tMi0vLy8tLS0tLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf",
      price: 200
    },
    { id: 2, 
      title: "Moby Dick", 
      author: "Herman Melville",
      image: "2wCEAAkGBxMTEhUSEhIWFRUXGBcYFxgXFxUYGBcdGhgYFxcVGBgYHSggGholGxgXITEhJSorLi4uGB8zODMsNygtLisBCgoKDg0OGxAQGzAlHyUtLSstLS0rLS0tLS0vKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf",
      price: 250
    },
    { id: 3, 
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      image: "2wCEAAkGBxMTEhUSEhMVFRUXGBgXGBgVGBgYHRgXGBgYFxUXGBgaHSggHR0lHRUYITEhJSkrLi4uGCAzODMsNygtLisBCgoKDg0OGxAQGysmICYtLy0tLS8tMC8tLi0rLTEwMy8tLi0tLS01LS0tLy0tLS0tLy0tLS0tLS0vLS8tKy0tLf",
      price: 300
    },
    { id: 4,
      title: "1984",
      author: "George Orwel",
      image: "2wCEAAkGBxMTEhUSEBMWFRMVFRUXFRUXFhUXFxcWFRUWGBUVFRUYHSggGBolHRUWITEiJSktLi4uGB8zODMtNygtLysBCgoKDg0OGxAQGy0lICYrMC0tNy0rLS4tKy0tLystLS0tLTU3NTAvLS0tLS0vKy0tLS0tLSstLy0tLi0tLS0tN",
      price: 350
    },
    { id: 5,
      title: "1984",
      author: "George Orwel",
      image: "2wCEAAkGBxMTEhUSEBMWFRMVFRUXFRUXFhUXFxcWFRUWGBUVFRUYHSggGBolHRUWITEiJSktLi4uGB8zODMtNygtLysBCgoKDg0OGxAQGy0lICYrMC0tNy0rLS4tKy0tLystLS0tLTU3NTAvLS0tLS0vKy0tLS0tLSstLy0tLi0tLS0tN",
      price: 350
    },
    { id: 6,
      title: "1984",
      author: "George Orwel",
      image: "2wCEAAkGBxMTEhUSEBMWFRMVFRUXFRUXFhUXFxcWFRUWGBUVFRUYHSggGBolHRUWITEiJSktLi4uGB8zODMtNygtLysBCgoKDg0OGxAQGy0lICYrMC0tNy0rLS4tKy0tLystLS0tLTU3NTAvLS0tLS0vKy0tLS0tLSstLy0tLi0tLS0tN",
      price: 350
    },
    { id: 7,
      title: "1984",
      author: "George Orwel",
      image: "2wCEAAkGBxMTEhUSEBMWFRMVFRUXFRUXFhUXFxcWFRUWGBUVFRUYHSggGBolHRUWITEiJSktLi4uGB8zODMtNygtLysBCgoKDg0OGxAQGy0lICYrMC0tNy0rLS4tKy0tLystLS0tLTU3NTAvLS0tLS0vKy0tLS0tLSstLy0tLi0tLS0tN",
      price: 350
    },
    { id: 8,
      title: "1984",
      author: "George Orwel",
      image: "2wCEAAkGBxMTEhUSEBMWFRMVFRUXFRUXFhUXFxcWFRUWGBUVFRUYHSggGBolHRUWITEiJSktLi4uGB8zODMtNygtLysBCgoKDg0OGxAQGy0lICYrMC0tNy0rLS4tKy0tLystLS0tLTU3NTAvLS0tLS0vKy0tLS0tLSstLy0tLi0tLS0tN",
      price: 350
    },
    { id: 9,
      title: "1984",
      author: "George Orwel",
      image: "2wCEAAkGBxMTEhUSEBMWFRMVFRUXFRUXFhUXFxcWFRUWGBUVFRUYHSggGBolHRUWITEiJSktLi4uGB8zODMtNygtLysBCgoKDg0OGxAQGy0lICYrMC0tNy0rLS4tKy0tLystLS0tLTU3NTAvLS0tLS0vKy0tLS0tLSstLy0tLi0tLS0tN",
      price: 350
    },
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
                    <div className="flex flex-wrap gap-5 justify-center items-center">
                        {
                            searchResults.map( book => <Card key={book.id}
                                title={book.title} 
                                author={book.author} 
                                price={book.price}/>
                            )
                        }
                    </div>
                ) : (
                    isSubmitted && <p>No results found</p> // Show only after form submission
                )}
            </div>
        </div>
    );
};

export default Search;
