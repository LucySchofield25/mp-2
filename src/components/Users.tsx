import styled from "styled-components";
import { User } from "../interfaces/User.ts";

const AllUsersDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: bisque;
    padding: 20px;
`;

const SingleUserDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: lightcyan;
    color: black;
    border: 3px darkblue solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
    border-radius: 10px;
`;

const UserImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;

interface Props {
    data: User[];
}

export default function Users({ data }: Props) {
    return (
        <AllUsersDiv>
            {data.map((user, index) => (
                <SingleUserDiv key={index}>
                    <h1>{user.name.title} {user.name.first} {user.name.last}</h1>
                    <UserImage src={user.picture.medium} alt={`Picture of ${user.name.first}`} />
                    <p><strong>Gender:</strong> {user.gender}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </SingleUserDiv>
            ))}
        </AllUsersDiv>
    );
}
