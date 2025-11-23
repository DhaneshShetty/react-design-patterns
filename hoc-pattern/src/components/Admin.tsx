import type { User } from "../types";

const Admin = ({user}:{user: User})=> {
    const isAdmin = user.role === 'admin';
    return (
        isAdmin ? 
        (<div>
            <h2> Admin Page </h2>
            <p> Hi Admin {user.name}!! How you doing? </p>
        </div>) :
        (
            <h3>Access Denied</h3>
        )
    )
}

export default Admin;