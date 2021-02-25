import { FC, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/fetch-hook";
import { Config } from "../../../util/config";
import { UserData } from "../../../util/types/data-types";
import { GetUsersResponse } from "../../../util/types/response-types";

/**
 * Day container.
 * 
 * This container manages the day.
 */
export const DayContainer: FC = () => {
    const { date } = useParams<{ date: string; }>();
    const { username } = useParams<{ username: string; }>();
    const [user, setUser] = useState<UserData>(null);
    const [usersQuery, usersQueryState] = useFetch<GetUsersResponse>(`${Config.API_URL}/users?name=${username}`);

    useEffect(() => {
        console.log('1');
        if (!usersQueryState.fetched) {
            usersQuery.get();
        } else if (usersQueryState.data && usersQueryState.data.users.length >= 1) {
            setUser(usersQueryState.data.users[0]);
            console.log('3 ' + user);
        } else {
            console.error(usersQueryState.errors);
        }
    }, [usersQueryState.fetched]);

    /**
     * Get day of date's param.
     */
    const day = useMemo(() => {
        return user?.days?.find(d => d.date === date)
    }, [user, date]);

    return (
        <div></div>
    );
}
