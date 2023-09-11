import React, { Component } from 'react';
import { fetchQuery } from '../servises/api';
import toast, { Toaster } from 'react-hot-toast';
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { LoadMoreBtn } from './Button/Button';
import { Loader } from './Loader/Loader';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';


export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    totalHits: 0,
    loading: false,
    error: false,
  }

componentDidUpdate(prevProps, prevState) {
  const { query, page} = this.state
    
    if(prevState.query !== query || prevState.page !== page) {
       this.fetchImages()
    }
  }
  fetchImages = async () => {
    const { query, page} = this.state

    try {
      this.setState({ loading: true });
      const currentQuery = query.slice(14);
      const { hits, totalHits } = await fetchQuery(currentQuery, page);

    if(!totalHits) {
      toast.error(
        'Sorry, there is no image for your search query, please try again!',{
          duration: 4000,
      });
      return
    } 
      
    this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        totalHits: totalHits,
      }));
    
    } catch (error) {
      this.setState({ error: true });
      toast.error('Sorry, something went wrong, please try again!',{
        duration: 4000,
    });
    } finally {
      this.setState({ loading: false, error: false });
    }
  }

  handleSubmit = value => {

    this.setState({
      query: `${Date.now()}/${value}`,
      images: [],
      page: 1,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const {totalHits, images, loading, error } = this.state
    const lastPages = Math.ceil(totalHits / 12);
    return (
      <Layout>
      <Searchbar onSubmit={this.handleSubmit}/>
      <section>
      {loading && <Loader/>}
      {totalHits > 0 && <ImageGallery images={images}/>}
      {images.length > 0 &&  lastPages > 1 && !loading && !error && <LoadMoreBtn onLoadMore={this.handleLoadMore}/>}
      </section>
      <GlobalStyle/>
      <Toaster position="top-right" reverseOrder={false}/>
    </Layout>
    )
  }

}
