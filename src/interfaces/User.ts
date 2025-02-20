export interface User {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    email: string;
    picture: {
        medium: string;
    };
}