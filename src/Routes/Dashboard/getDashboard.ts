import {auth} from "../authTyples";
import Dashboard from '../../Views/Dashboard/Dashboard';
import TeacherDashboard from '../../Views/TeacherDashboard/TeacherDashboard';
export const getDashboard = () => {
    const getItme = localStorage.getItem('auth');
    const user: auth = getItme && JSON.parse(getItme);

    switch (user.loginAs) {
        case 'Teacher': {
            return TeacherDashboard;
        }
        default: {
            return Dashboard;
        }
    }
}