import { useEffect, useState } from "react";
import type { User } from "../types";

const withUserData = (WrappedComponent: React.ComponentType<any>) => {
    return (props: any) => {
        const role = "admin";
        const permissions = ["view_reports"];
        const [user, setUser] = useState<User | undefined>();

        useEffect(() => {
            // Simulate fetching user data
            setTimeout(() => {
                setUser({ name: "John Doe", age: 30, role, permissions });
            }, 1000);
        }, []);

        if(user === undefined) {
            return <div>Loading user data...</div>;
        }

        return <WrappedComponent user={{ name: "John Doe", age: 30, role, permissions}} {...props} />;
    }
};

export default withUserData;