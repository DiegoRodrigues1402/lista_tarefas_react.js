function Filter({filter,setFilter,setSort}) {
    return (
        <div className="filter">
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select value={filter} onChange={(fil) => setFilter(fil.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="isCompleted">Incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Ordem Alfabetica</p>
                    <button onClick={() => setSort("Asc")}>Asc</button>
                    <button onClick={() => setSort("Desc")}>Desc</button>
                </div>
            </div>
        </div>
    );
}

export default Filter;