import { IoChevronForwardOutline } from "react-icons/io5";

export default function Header({ query, handleQueryChange, handleSearchSubmit }) {
  return (
    <div className="m-4 my-4 pb-24 overflow-hidden flex flex-col items-center justify-items-center">
      <h1 className="text-2xl mb-3 text-white font-bold">IP Address Tracker </h1>
      <form className="m-4 flex items-center" onSubmit={handleSearchSubmit}>
        <input
          className="rounded-xl rounded-r-none px-4 py-2 h-10 resize-none inline-block"
          type="text"
          placeholder="Enter IP Address"
          value={query} 
          onChange={handleQueryChange} 
        />
        <button
          className="rounded-xl rounded-l-none px-4 py-2 inline-block h-10 bg-gray-800 text-white"
          type="submit"><IoChevronForwardOutline /></button>
      </form>
    </div>
  );
}
