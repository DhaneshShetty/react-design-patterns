import type { User } from "../types"

const Reports = ({user}: {user: User}) => {
    const hasReportsPermission = user.permissions?.includes('view_reports');
    return (
        hasReportsPermission ? (
            <div>
                <h2>Reports</h2>
                We are a fake website, we don't have any reports!! Look for it somewhere else {user.name}!!
            </div>
        ) : 
        <p>You do not have permission to view this page!!</p>
    )
}

export default Reports;