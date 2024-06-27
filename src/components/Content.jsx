import "../css/Content.css";
import Article from "./Article";
import SearchAdopt from "./SearchAdopt";

function Content() {
  return (
    <div className="content">
      <SearchAdopt />
      <h2 className="article">Adopt</h2>
      <Article />
    </div>
  );
}

export default Content;
