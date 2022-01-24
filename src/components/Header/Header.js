export default function Header({ query, handleQueryChange, handleSearchSubmit }) {
  return (
    <div className="m-5 flex flex-col items-center justify-items-center">
      <h1 className="text-2xl font-bold">IP Address Tracker</h1>
      <form className="m-4" onSubmit={handleSearchSubmit}>
        <input type="text" value={query} onChange={handleQueryChange} />
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}
