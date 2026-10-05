import styles from "./DogFilters.module.css";

export default function DogFilters({
    search,
    setSearch,
    age,
    setAge,
    gender,
    setGender,
    status,
    setStatus
}) {

    return (
        <div className={styles.MainContainerDogFilters}>

            <input
                type="text"
                placeholder="Search by name or breed..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />


            <select
                value={age}
                onChange={(event) => setAge(event.target.value)}
            >
                <option value="">All ages</option>
                <option value="young">Under 2 years</option>
                <option value="adult">2–5 years</option>
                <option value="older">6+ years</option>
            </select>


            <select
                value={gender}
                onChange={(event) => setGender(event.target.value)}
            >
                <option value="">All genders</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>


            <select
                value={status}
                onChange={(event) => setStatus(event.target.value)}
            >
                <option value="">All statuses</option>
                <option value="Available">Available</option>
                <option value="Reserved">Reserved</option>
                <option value="Adopted">Adopted</option>
                <option value="In Foster Care">In Foster Care</option>
                <option value="On Hold">On Hold</option>
            </select>

        </div>
    );
}