const InputGroup = ({ totalEpisode, setId }) => {
  return (
    <div className="input-group mb-3    ">
      <button
        className="btn btn-outline-secondary dropdown-toggle px-5 "
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Choose...
      </button>
      <ul className="dropdown-menu ">
        {totalEpisode.map((episode) => (
          <li key={episode.id} style={{ cursor: "pointer" }}>
            <span className="dropdown-item" onClick={() => setId(episode.id)}>
              Episode - {episode.id}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InputGroup;
