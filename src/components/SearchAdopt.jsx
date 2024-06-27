const SearchAdopt = () => {
  return (
    <div className="search-adopt">
      <h2>SearchAdopt</h2>

      <p>type</p>
      <input type="checkbox" name="cat" value="cat" id="cat" />
      <label htmlFor="cat">cat</label>

      <input type="checkbox" name="dog" value="dog" id="dog" />
      <label htmlFor="dog">dog</label>

      <p>behavior</p>
      <input type="checkbox" name="cat" value="active" id="active" />
      <label htmlFor="active">active</label>

      <input
        type="checkbox"
        name="emotional"
        value="emotional"
        id="emotional"
      />
      <label htmlFor="emotional">emotional</label>

      <input type="checkbox" name="kind" value="kind" id="kind" />
      <label htmlFor="kind">kind</label>

      <input type="checkbox" name="friendly" value="friendly" id="friendly" />
      <label htmlFor="friendly">friendly</label>

      <button className="btn-search ">search</button>
    </div>
  );
};

export default SearchAdopt;
