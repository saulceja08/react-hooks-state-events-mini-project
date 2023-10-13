import React from "react";

function CategoryFilter({ categories, handleClick }) {
  function CategoryBtn({ context }) {
    function handleButtonClick(event) {
      event.target.classList.add("selected");
      handleClick(event);
    }

    return (
      <button name={context} onClick={handleButtonClick}>
        {context}
      </button>
    );
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((cate, index) => (
        <CategoryBtn key={index} context={cate} />
      ))}
    </div>
  );
}

export default CategoryFilter;