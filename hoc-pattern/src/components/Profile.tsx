import type { User } from "../types";

const Profile = ({ user, status }: { user: User, status: string }) => {
    return (
        <div>
            <h2>Profile</h2>
            <b>Name:</b> {user.name}
            <b>Age:</b> {user.age}
            <b>Role:</b> {user.role}
            {status}
        </div>
    );
}

export default Profile;