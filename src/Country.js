import React from "react";

const Country = (props) => {
  const { country } = props;
  const { name, flags, capital, population, area } = country;

  const handleRemove = (name) => {
    props.onRemove(name)
  };

  return (
    <article class="">
      <div class="bg-lime-500  rounded-m-xl transition duration-350 hover:scale-100 m-5">
        <img class=" pl-5 pt-3 w-40 h-28 " src={flags.png} alt={name.common} />

        <div class=" flex flex-col-reverse mr-10 leading-[.25rem] pl-8 ">
          <h3>Name:{name.common}</h3>
          <h3>population:{population}</h3>
          <h3>capital:{capital}</h3>
          <h3>area:{area}</h3>
        </div>
        <button
          class=" bg-violet-500 rounded-full  px-2 mx-8 mb-5 "
          onClick={() => {
            handleRemove(name.common);
          }}
        >
          Remove
        </button>
      </div>
    </article>
  );
};

export default Country;
