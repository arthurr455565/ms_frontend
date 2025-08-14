import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { updateStudent, getStudentById} from "../../services/StudentService";
import type { Student } from "../../services/StudentService";
import { useNavigate} from "react-router-dom";


const EditStudent = () => {
    const navigate = useNavigate();
   const { id } = useParams<{id: string}>();
   const [formData, setFormData] = useState<Student>({
    name: "",
    rollNumber: "",
    email: "",
    dateOfBirth: "",
    age: 0,
    gender: "",
    address: "",
    phoneNumber: ""

   });
   useEffect(() => {
    const fetchStudent = async () => {
        if(id){
            try{
                const studentData = await getStudentById(id); 
                if (studentData) {
                    setFormData({
                        ...studentData,
                        dateOfBirth: new Date(studentData.dateOfBirth).toISOString().split('T')[0],
                    });
                }
            }catch(e){
                console.log("Error Fetching Student", e);
            }
        }
    }
    fetchStudent();
   },[id]);


   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
};
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData)

    try{
        await updateStudent(id as string, {
            ...formData,
            dateOfBirth: new Date(formData.dateOfBirth),
            age: Number(formData.age)
        })          
        setFormData({
            name: "",
            rollNumber: "",
            email: "",
            dateOfBirth: new Date(),
            age: 0,
            gender: "",
            address: "",
            phoneNumber: ""
        });
        alert("Student updated successfully!");
        navigate("/dashboard")
    } catch (error) {
        console.error("Error updating student:", error);
        alert("Failed to add student.");
    }
};

return (
    <form
        className="max-w-mm mx-auto bg-white shadow-lg rounded-lg p-8 space-y-6 sm:max-w-md"
        onSubmit={handleSubmit}
    >
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Edit Student</h2>
        <div className="grid grid-cols-1 gap-5">
            <div>
                <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
                <input
                    className="block px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label className="block text-gray-700 mb-1" htmlFor="rollNumber">Roll Number</label>
                <input
                    className="block px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    id="rollNumber"
                    name="rollNumber"
                    placeholder="Roll Number"
                    type="text"
                    value={formData.rollNumber}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
                <input
                    className="block px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label className="block text-gray-700 mb-1" htmlFor="dateOfBirth">Date Of Birth</label>
                <input
                    className="block px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    placeholder="Date Of Birth"
                    type="date"
                    value={formData.dateOfBirth as string}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label className="block text-gray-700 mb-1" htmlFor="age">Age</label>
                <input
                    className="block px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    id="age"
                    name="age"
                    placeholder="Age"
                    type="number"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label className="block text-gray-700 mb-1" htmlFor="gender">Gender</label>
                <select
                    className="block px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                >
                    <option value = "">select gender </option>
                    <option value = "Male">Male </option>
                    <option value = "Female">Female </option>
                    <option value = "Other">Other </option>
                </select>
            </div>
            <div>
                <label className="block text-gray-700 mb-1" htmlFor="address">Full Address</label>
                <input
                    className="block px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    id="address"
                    name="address"
                    placeholder="Full Address"
                    type="text"
                    value={formData.address}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label className="block text-gray-700 mb-1" htmlFor="phoneNumber">Phone Number</label>
                <input
                    className="block px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    type="number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                />
            </div>
        </div>
        <button
            className="block w-sm bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
            type="submit"
        >
            Update
        </button>
    </form>
);
};
export default EditStudent;