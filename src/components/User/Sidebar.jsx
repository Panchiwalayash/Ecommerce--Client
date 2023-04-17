import React, { useState } from 'react'

const Sidebar = () => {

    const [isChecked, setIsChecked] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };
  
    const handleRadioChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    const handleClearButtonClick = () => {
      setIsChecked(false);
      setSelectedOption('');
    };

  return (
    <div className='w-full h-full p-5 bg-[https://www.hdnicewallpapers.com/Walls/Big/Abstract/Gray_Color_Curved_Pattern_5K_Abstract_Wallpaper.jpg]
    '  >
        <div className="price rounded-lg p-2 bg-[#ffffff] backdrop-blur-md opacity-80" style={{border:"1px solid grey"}}>
            <div className="price-text font-semibold mb-2">Price</div>
            <div className="priceList">
              <form>
                <div className="priceSection flex items-center">
                <input type="radio" name="price" id="500" value={500} />
                <label className='ml-1' htmlFor="500">less than 500</label>
                </div>
                <div className="priceSection flex items-center">
                <input type="radio" name="price" id="1000" value={1000} />
                <label className='ml-1' htmlFor="1000">less than 1000</label>
                </div>
                <div className="priceSection flex items-center">
                <input type="radio" name="price" id="5000" value={5000} />
                <label className='ml-1' htmlFor="5000">less than 5000</label>
                </div>
                <div className="priceSection flex items-center">
                <input type="radio" name="price" id="20000" value={20000} />
                <label className='ml-1' htmlFor="20000">less than 20000</label>
                </div>
                <input className='mt-3 px-2 rounded-md text-light bg-gray hover:cursor-pointer'type="reset" value="Clear" />
                </form>
            </div>
        </div>

    </div>
  )
}

export default Sidebar