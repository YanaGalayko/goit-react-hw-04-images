import React, { useState, useEffect } from 'react';
import { fetchQuery } from '../servises/api';
import toast, { Toaster } from 'react-hot-toast';
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { LoadMoreBtn } from './Button/Button';
import { Loader } from './Loader/Loader';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

export const App = () => {
const [query, setQuery] = useState('')
const [images, setImades] = useState([])
const [page, setPage] = useState(1)
const [totalHits, setTotalHits] = useState(0)
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)

useEffect(() => {
  if (!query) {
    return;
  }

  const fetchImages = async () => {
    try {
      setLoading(true);
      setError(false);
      const currentQuery = query.slice(14);
      const { hits, totalHits } = await fetchQuery(currentQuery, page);
  
    if(!totalHits) {
      toast.error(
        'Sorry, there is no image for your search query, please try again!',{
          duration: 4000,
      });
      return
    } 
      
    setImades(prevImages => [...prevImages, ...hits])
    setTotalHits(totalHits)
    
    } catch (error) {
      setError(true);
      toast.error('Sorry, something went wrong, please try again!',{
        duration: 4000,
    });
    } finally {
      setLoading(false);
      setError(false);
    }
  } 

  fetchImages()
}, [page, query])

const handleSubmit = (value) => {
  setQuery(`${Date.now()}/${value}`)
  setImades([])
  setPage(1)
};

const handleLoadMore = () => {
  setPage(prevPage => prevPage + 1);
};

const lastPages = Math.ceil(totalHits / 12);
return (
  <Layout>
  <Searchbar onSubmit={handleSubmit}/>
  <section>
  {loading && <Loader/>}
  {totalHits > 0 && <ImageGallery images={images}/>}
  {images.length > 0 &&  lastPages > 1 && !loading && !error && <LoadMoreBtn onLoadMore={handleLoadMore}/>}
  </section>
  <GlobalStyle/>
  <Toaster position="top-right" reverseOrder={false}/>
</Layout>
)
}






