
import { useState, useEffect } from 'react';
import PicturesComponent from './components/PicturesComponent';
import Pagination from './components/Pagination';
import axios from 'axios';
import chunk from './utilities/chunk';
/**
 *
 *
 * Step 1: Render all the images returned ✔
 * Step 2: Create chunks of 10 images from the returned list ✔
 * Step 3: Render the first 10 of the list ✔
 * Step 4: Build a way to increment to the next 10 ✔
 * Step 5: Build a way to decrement to the previous 10 ✔
 * Step 6: Create a UI that shows which page you're viewing ✔
 * Step 7: Write a test that covers a user interaction ✔
 *
 */

function App() {

  const IMAGES_URL = "https://dog.ceo/api/breed/hound/images/random/55";
  const [loader, setLoader] = useState(false);
  const [pictures, getPictures] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [picsPerPage] = useState(10);
  const [btnActive, setActive] = useState('')

  useEffect(() => {
    const fetchImages = async () => {
      setLoader(true);
      const res = await axios.get(IMAGES_URL);
      getPictures(res.data.message);
      setLoader(false);
    }
    fetchImages();
  }, [])

  // Create chunked group of images per page
  const lastPictureIdx = currentPage * picsPerPage;
  const firstPictureIdx = lastPictureIdx - picsPerPage;
  const currentPictures = pictures.slice(firstPictureIdx, lastPictureIdx);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  }

  return (
    <div>
      <PicturesComponent pictures={chunk(currentPictures)} loader={loader} />
      <Pagination picsPerPage={picsPerPage} totalPictures={pictures.length} paginate={paginate} currentPage={currentPage} />
    </div>
  );
}

export default App;


