import { Component } from "react";
import { fetchCatByBreed } from "./api";
import { BreedSelect } from "./BreedSelect";
// import { Layout } from './Layout';
import { Cat } from './Cat';
import { CatSkeleton } from "./CatSkeleton";
import { ErrorMessage } from "./ErrorMessage";

export class App extends Component {

state = {
  cat: null,
  isLoading: false,
  error: null,
}

  fetchCat = async breedId => {
  try {
    this.setState({ isLoading: true, error: null });
    const cat = await fetchCatByBreed(breedId);
      this.setState({ cat });
  } catch (error) {
    this.setState({ error: 'something is wrong, reload the page🤔', });
  } finally {
    this.setState({ isLoading: false });
  }
  };
  
  render() {
    const { cat, error, isLoading } = this.state;
    return(
      <div>
        <BreedSelect onSelect={this.fetchCat}/>
        { isLoading && <CatSkeleton />}
        {cat && !isLoading && <Cat cat={cat} />}
        {error && <ErrorMessage>(error)</ErrorMessage>}
      </div>
    );
  }
};
