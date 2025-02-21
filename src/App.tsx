import Users from "./components/Users.tsx";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { User } from "./interfaces/User.ts";

const ParentDiv = styled.div`
    width: 80vw;
    margin: auto;
    border: 5px cadetblue solid;
`;

export default function App() {

    const [data, setData] = useState<User[]>([]);

    useEffect(() => {
        async function fetchData(): Promise<void> {
            try {
                const response = await fetch("https://randomuser.me/api/?results=5");
                const jsonData = await response.json();
                setData(jsonData.results);
            } catch (error) {
                console.error("There was an error: ", error);
            }
        }

        fetchData();
    }, []);

    return (
        <ParentDiv>
            <Users data={data} />
        </ParentDiv>
    );
}
