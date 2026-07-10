import { useMemo, useState } from "react";

const useUserFilters = (users = []) => {
    const [search, setSearch] = useState("");
    const [college, setCollege] = useState("");
    const [year, setYear] = useState("");
    const [reward, setReward] = useState("");

    const filteredUsers = useMemo(() => {
        return users.filter((user) => {

            const matchSearch =
                user.name?.toLowerCase().includes(search.toLowerCase()) ||
                user.email?.toLowerCase().includes(search.toLowerCase()) ||
                user.phone?.includes(search);

            const matchCollege =
                !college || user.college === college;

            const matchYear =
                !year || user.yearOfStudy === year;

            const matchReward =
                !reward || user.rewardStatus === reward;

            return (
                matchSearch &&
                matchCollege &&
                matchYear &&
                matchReward
            );
        });
    }, [users, search, college, year, reward]);

    const colleges = [...new Set(users.map(u => u.college))];

    const years = [...new Set(users.map(u => u.yearOfStudy).filter(Boolean))];

    return {
        filteredUsers,

        search,
        setSearch,

        college,
        setCollege,

        year,
        setYear,

        reward,
        setReward,

        colleges,
        years
    };
};

export default useUserFilters;