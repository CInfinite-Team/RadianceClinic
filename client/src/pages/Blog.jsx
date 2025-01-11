import { React, useState, useEffect } from 'react';
import HeroSectionAll from '../components/SharedComponents/HeroSectionAll';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import CardList from '../components/Blog/CardLoader';
import FillerContent from '../components/Blog/FillerContent';
import PrimaryBtn from '../components/Buttons/PrimaryBtn';

const Blog = () => {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  useEffect(() => {
    fetch('https://912df489-6af2-40ca-925f-0d0bb55c9c1b.mock.pstmn.io/cards')    //Need to be updated with actual API route (currently fetching from postman API)
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  //Pagination slicing
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentCards = cards.slice(firstIndex, lastIndex);


  // Calculate the total number of pages
  const totalPages = Math.ceil(cards.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);  // Set current page
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <HeroSectionAll Title={'Blog'} Path={'Home'} SubPath={'Blog'} />

      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">

          <h1 className="text-4xl font-bold mb-2 text-gray-700 font-ElMessiri text-left">Blogs</h1>
          <p className="text-lg text-gray-600 text-left mb-4 font-ElMessiri">Discover expert insights, hair care tips, and inspiring stories to help you embrace confidence and radiance every day.</p>
        <div className='flex gap-5'>
        <PrimaryBtn className=''> All </PrimaryBtn>
        <PrimaryBtn className=''> Skin </PrimaryBtn>
        <PrimaryBtn className=''> Hair </PrimaryBtn>
        <PrimaryBtn className=''> Laser </PrimaryBtn>

          <div>
            <span>Sort</span>
            <select name="dropdown" id="dropdown">
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="a-z">A-z</option>
              <option value="z-a">Z-a</option>
            </select>
          </div>
        </div>

        <CardList currentCards={currentCards} />

        <div className="mt-6">
          {/* Pagination buttons with < and > symbols */}
          <ul className="flex space-x-2">
            <li>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className={`px-4 py-2 rounded ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-[#947ABB] hover:scale-125 transition-transform'}`}
                disabled={currentPage === 1}
              >&lt;</button>
            </li>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <li key={pageNumber}>
              <button
                onClick={() => handlePageChange(pageNumber)}
                className={`px-4 py-2 rounded ${currentPage === pageNumber ? 'font-bold text-[#554075] scale-125' : 'text-[#947ABB] hover:scale-125 transition-transform'}`}
                >{pageNumber}</button>
              </li>
            ))}

            <li>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className={`px-4 py-2 rounded ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-[#947ABB] hover:scale-125 transition-transform'}`}
                disabled={currentPage === totalPages}
              >&gt;</button>
            </li>
          </ul>
        </div>
      </div>
      
      <FillerContent/>
      <Footer />

    </>
  );
};

export default Blog;