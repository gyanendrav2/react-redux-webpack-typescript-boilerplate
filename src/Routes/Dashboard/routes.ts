import StudentList from '../../Views/StudentList/StudentList';
import AddNewStudent from '../../Views/AddNewStudent/AddNewStudent';
import AddNewTeacher from '../../Views/AddNewTeacher/AddNewTeacher';
import AddNewStaff from '../../Views/AddNewStaff/AddNewStaff';
import AddNewParent from '../../Views/AddNewParent/AddNewParent';
import ParentList from '../../Views/ParentList/ParentList';
import TeacherList from '../../Views/TeacherList/TeacherList';
import StaffList from '../../Views/StaffList/StaffList';
import Dashboard from '../../Views/Dashboard/Dashboard';
import DailyAttendance from '../../Views/DailyAttendace';
import ClassRoutine from '../../Views/ClassRoutine';
import SubjectList from '../../Views/SubjectList';
import SessionList from '../../Views/SessionList';
import ClassList from '../../Views/ClassList';
import Departments from '../../Views/Departments';
import syllabusList from '../../Views/SyllabusList';
import PermissionList from '../../Views/PermissionLIist/PermissionList';
import StudentFees from '../../Views/StudentFees';
import ExpenseCategory from '../../Views/ExpenseCategory';
import ExpenseManager from '../../Views/ExpenseManager';
import AddStudentBulk from '../../Views/AddStudentBulk/AddStudentBulk';
import AddParentBulk from '../../Views/AddParentBulk/AddParentBulk';
import AddTeacherBulk from '../../Views/AddTeacherBulk/AddTeacherBulk';
import AddStaffBulk from '../../Views/AddStaffBulk/AddStaffBulk';
import {getDashboard} from "./getDashboard";
import TeacherProfile from '../../Views/TeacherProfile/TeacherProfile';

export const dashboardRoutes = [
    { pathname: '/dashboard', component: getDashboard() },
    { pathname: '/dashboard/students', component: StudentList },
    { pathname: '/dashboard/student/add-new-student', component: AddNewStudent },
    { pathname: '/dashboard/student/add-new-teacher', component: AddNewTeacher },
    { pathname: '/dashboard/student/add-new-staff', component: AddNewStaff },
    { pathname: '/dashboard/student/add-new-parent', component: AddNewParent },
    { pathname: '/dashboard/parents', component: ParentList },
    { pathname: '/dashboard/teachers', component: TeacherList },
    { pathname: '/dashboard/Staff', component: StaffList },
    { pathname: '/dashboard/daily-attendance', component: DailyAttendance },
    { pathname: '/dashboard/class-routine', component: ClassRoutine },
    { pathname: '/dashboard/subjects', component: SubjectList },
    { pathname: '/dashboard/sessions', component: SessionList },
    { pathname: '/dashboard/classes', component: ClassList },
    { pathname: '/dashboard/departments', component: Departments },
    { pathname: '/dashboard/syllabus', component: syllabusList },
    { pathname: '/dashboard/permissions', component: PermissionList },
    { pathname: '/dashboard/studen-free-manager', component: StudentFees },
    { pathname: '/dashboard/expense-category', component: ExpenseCategory },
    { pathname: '/dashboard/expense-manager', component: ExpenseManager },
    { pathname: '/dashboard/student/bulk-upload', component: AddStudentBulk },
    { pathname: '/dashboard/teacher/bulk-upload', component: AddTeacherBulk },
    { pathname: '/dashboard/parent/bulk-upload', component: AddParentBulk },
    { pathname: '/dashboard/staff/bulk-upload', component: AddStaffBulk },
    { pathname: '/dashboard/teacher-profile', component: TeacherProfile },
];
