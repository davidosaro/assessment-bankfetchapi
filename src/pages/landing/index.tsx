import Navbar from '../../components/navbar';
import Hero from '../../components/hero';
import Businesses from '../../components/business';
import { useState } from 'react';

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [loadingBusiness, setLoadingBusiness] = useState(true)
  const setSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }
  return (
    <>
      <Navbar />
      <Hero searchValue={searchValue} setSearchValue={setSearch} loadingBusiness={loadingBusiness}/>
      <Businesses searchValue={searchValue} setLoadingBusiness={setLoadingBusiness}/>
    </>
  )
}

export default App
