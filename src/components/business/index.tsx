import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown, faCircle, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { request } from "../../api/apiService";
import { MEAL } from "../../api/apiURL.js";
import Notify from "../utils/Notify.ts";

interface businessProps {
  searchValue?: string;
  setLoadingBusiness?(state: boolean): void;
}

export default function Businesses({searchValue = "", setLoadingBusiness = () => {}}: businessProps) {
  const [business, setBusiness] = useState(Array<object>);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState(Array<string>);
  const [countries, setCountries] = useState(Array<string>);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  interface Business {
    strMealThumb?: string,
    strMeal?: string,
    strArea?: string,
    strCategory?: string,
    strInstructions?: string,
  }
  interface BusinessResult {
    meals: Array<object>
  }
  const getBusiness = async() => {
    try {
      setLoading(true)
      const response: Response = await request(MEAL.FINDALL);
      const result: BusinessResult = await response.json();
      if (result) {
        //
        const businesses = result.meals;
        const categories = businesses.map((b: Business) => {
          return b.strCategory;
        })
        const countries = businesses.map((b: Business) => {
          return b.strArea;
        })

        const noDuplicateCategories = [...new Set(categories)] as string[];
        const noDuplicateCountries = [...new Set(countries)] as string[];

        setCategories(noDuplicateCategories);
        setCountries(noDuplicateCountries)
        setLoading(false)
        setBusiness(businesses)
        setLoadingBusiness(false);
      } else {
        throw new Error("Something went wrong")
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        Notify(error.message, "error")
        setLoading(false)
      }
    }
  }
  const filterBusiness = () => {
    return business.filter((b: Business) => {
      return b.strMeal?.toLowerCase().indexOf(searchValue?.toLowerCase()) != -1 &&
      b.strArea?.toLowerCase().indexOf(selectedCountry?.toLowerCase()) != -1 && 
      b.strCategory?.toLowerCase().indexOf(selectedCategory?.toLowerCase()) != -1
    })
  }
  
  const clearFilter = () => {
    setSelectedCategory("");
    setSelectedCountry("");
  }
  useEffect(()=> {
    getBusiness()
  }, [])

  //loading animation
  useEffect(() => {
    setLoadingBusiness(true);
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
      setLoadingBusiness(false);
    }, 1000)
  }, [selectedCategory, selectedCountry, searchValue, setLoadingBusiness])

  return (
    <section className="px-[60px] py-[40px] flex gap-x-[30px]">
      <div className="w-full">
        <header className="flex justify-between font-bold py-[15px] ">
          <div>{filterBusiness().length} business found</div>
          <div>
            Relevant
            <FontAwesomeIcon icon={faAngleDown} className="ml-[8px]"/>
          </div>
        </header>
        <div className="space-y-[20px]">
          {
            !loading ? filterBusiness().length > 0 ? filterBusiness().map((b: Business) => (

              <div className="border-[1px] rounded-lg h-[200px] p-[20px] pl-0">
                <div className="flex">
                  <div className="w-[100px] px-[20px] py-[10px]"><img src={b.strMealThumb} alt="Image" className="w-full rounded-lg"/></div>
                  <div className="w-full">
                    <div className="flex justify-between mb-[20px]">
                      <div>
                        <h1 className="font-semibold text-[24px] mb-[4px] font-header">{b.strMeal}</h1>
                        <div className="text-[15px] space-x-[6px] font-semibold font-header">
                          <span className="font-semibold">Category: {b.strCategory}</span>
                          <span>
                            <FontAwesomeIcon icon={faCircle} className="w-[5px]"/>
                          </span>
                          <span className="text-green-800">{b.strArea}</span>
                        </div>
                      </div>
                      <span className="bg-gray-100 px-[12px] py-[10px] h-fit rounded-lg cursor-pointer">
                        <FontAwesomeIcon icon={faBookmark} size="lg"/>
                      </span>
                    </div>
                    <div className="font-secondary text-gray-500 text-[15px] line-clamp-3">
                      {b.strInstructions}
                    </div>
                  </div>
                </div>
              </div>
            ))
             : (
              <div>
                Not Found
              </div>
            ) : (
              <div>
                Loading
                
              </div>
            )
          }
        </div>
      </div>
      <div className="max-w-[300px] w-full">
        <div className="border-[1px] rounded-lg min-h-[200px]">
          <div className="flex flex-wrap justify-between border-b-[1px] p-[15px] font-semibold">
            <p>Filter</p>
            <p className="text-red-600 cursor-pointer" onClick={clearFilter}>Clear all</p>
          </div>

          <div className="border-b-[1px] px-[15px] py-[20px] ">
            <p className="font-semibold mb-[10px]">Categories</p>
            <div className="bg-gray-100 p-[10px] rounded-lg border-gray-200 border-[1px]">
              <select id="countries" value={selectedCategory} className="bg-transparent w-full font-medium outline-none" onChange={(e) => setSelectedCategory(e.target.value)}>
                <option selected>Select Category</option>
                {
                  categories.map((cat) => (
                    <option value={cat}>{cat}</option>
                  ))
                }
              </select>
            </div>
          </div>

          <div className="border-b-[1px] px-[15px] py-[20px] ">
            <p className="font-semibold mb-[10px]">Country</p>
            <div className="bg-gray-100 p-[10px] rounded-lg border-gray-200 border-[1px] flex gap-x-[4px] items-center">
            <FontAwesomeIcon icon={faLocationDot} />
              <select id="countries" value={selectedCountry} className="bg-transparent w-full font-medium outline-none" onChange={(e) => setSelectedCountry(e.target.value)}>
                <option selected>Choose a country</option>
                {
                  countries.map((country) => (
                    <option value={country}>{country}</option>
                  ))
                }
              </select>
            </div>
          </div>

          {/* <div className="border-b-[1px] px-[15px] py-[20px] ">
            <p className="font-semibold mb-[10px]">City</p>
            <div className="bg-gray-100 p-[10px] rounded-lg border-gray-200 border-[1px]">
              <select id="countries" className="bg-transparent w-full font-medium">
                <option selected>All Cities</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div> */}


          {/* <div className="border-b-[1px] px-[15px] py-[20px] ">
            <p className="font-semibold mb-[10px]">Size</p>
            <div className="bg-gray-100 p-[10px] rounded-lg border-gray-200 border-[1px]">
              <select id="countries" className="bg-transparent w-full font-medium">
                <option selected>Select Size</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div> */}

          {/* <div className="border-b-[1px] px-[15px] py-[20px] ">
            <p className="font-semibold mb-[10px]">Type</p>
            <div className="bg-gray-100 p-[10px] rounded-lg border-gray-200 border-[1px]">
              <select id="countries" className="bg-transparent w-full font-medium">
                <option selected>Select Type</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}