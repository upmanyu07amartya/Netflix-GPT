import React from 'react'
import { useSelector } from 'react-redux';
import lang from '../utils/languageConstant';

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4  col-span-9"
          placeholder={lang[language].gptSearchPlaceholder}
        />
        <button className="col-span-3 py-2 px-4 m-4 bg-red-600 text-white rounded-lg">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar