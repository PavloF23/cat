import { Component } from 'react';
import Select from 'react-select';
import { fetchBreeds } from './api';
import { ErrorMessage } from './ErrorMessage';

export class BreedSelect extends Component {
  state = {
    breeds: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true, error: null });
      const breeds = await fetchBreeds();
      this.setState({ breeds });
    } catch (error) {
      this.setState({ error: 'something is wrong, reload the page🤔' });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  makeOptions = () => {
    return this.state.breeds.map(breed => ({
      label: breed.name,
      value: breed.id,
    }));
  };

  render() {
    const { isLoading, error } = this.state;
    const { onSelect } = this.props;
    const options = this.makeOptions();

    return (
      <div>
        <Select
          options={options}
          isLoading={isLoading}
          onChange={option => onSelect(option.value)}
        />
        {/* { isLoading && <div>Loading...</div>} */}
        {error && <ErrorMessage>(error)</ErrorMessage>}
      </div>
    );
  }
}
