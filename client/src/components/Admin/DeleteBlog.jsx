import { memo, useState, useEffect } from 'react';
import axios from 'axios'; 
import BlogDeleteCards from './BlogDeleteCards';
import PrimaryBtn from '../Buttons/PrimaryBtn';
import SERVER_URL from '../../constant.mjs';
import Cookies from 'js-cookie';

// import { React, useState, useEffect } from 'react';
// import axios from 'axios'; 
// import HeroSectionAll from '../components/SharedComponents/HeroSectionAll';
// import Navbar from '../components/navbar/Navbar';
// import Footer from '../components/footer/Footer';
// import CardList from '../components/Blog/CardLoader';
// import FillerContent from '../components/Blog/FillerContent';
// import PrimaryBtn from '../Buttons/PrimaryBtn';
// import SERVER_URL from '../constant.mjs';

const DeleteBlog = ({setshowDeletePopup}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState('newest');
  const loginTokenCookie = Cookies.get('LoginStatus');
  const token = loginTokenCookie ? JSON.parse(loginTokenCookie).token : null;
  
  const fetchBlogs = async () => {
    try {
    // Assuming the JWT token is stored in localStorage
      const response = await axios.get(`${SERVER_URL}/api/admin/blogs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          category,
          sort,
        },
      });
      setCards(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [category, sort]);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentCards = cards.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(cards.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <>
      {/* <Navbar />
      <HeroSectionAll Title={'Blog'} Path={'Home'} SubPath={'Blog'} /> */}

      <div className="min-h-screen  flex flex-col py-8 p-5 xl:p-10">
        <h1 className='mb-10 font-ElMessiri text-[#554075] font-bold leading-tight animate-fadeIn' style={{ fontSize: 'clamp(36px,6vw,60px)' }}>
          View Blogs
        </h1>

        {/* Button for category filtering */}
        {/* <div className="flex justify-between items-center w-full mb-4  pb-4 flex-wrap">
          <div className="flex gap-5 overflow-x-auto pb-2">
            <PrimaryBtn className="px-4 py-2" onClick={() => handleCategoryChange('')}>All</PrimaryBtn>
            <PrimaryBtn className="px-4 py-2" onClick={() => handleCategoryChange('skin')}>Skin</PrimaryBtn>
            <PrimaryBtn className="px-4 py-2" onClick={() => handleCategoryChange('hair')}>Hair</PrimaryBtn>
            <PrimaryBtn className="px-4 py-2" onClick={() => handleCategoryChange('laser')}>Laser</PrimaryBtn>
          </div>

          <div className="flex items-center gap-2 mt-4 sm:mt-0 sm:ml-auto">
            <span className="text-gray-700 font-medium">Sort</span>
            <select
              name="dropdown"
              id="dropdown"
              className="border border-gray-300 rounded-lg px-3 py-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#947ABB] transition duration-300"
              onChange={handleSortChange}
              value={sort}
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
           
            </select>
          </div>
        </div> */}

        <BlogDeleteCards  currentCards={currentCards} Loading={loading} />

        {/* Pagination */}
        <div className="mt-6">
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
      
      {/* <FillerContent />
      <Footer /> */}
    </>
  );
};


export default memo(DeleteBlog);
