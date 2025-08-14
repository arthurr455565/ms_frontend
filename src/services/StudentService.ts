import { api } from "../api/api";

export type Student = {

    id?: string;
    name:string;
    rollNumber: string;
    email: string;
    dateOfBirth: string | Date;
    age: number;
    gender: string
    address: string;
    phoneNumber: string;
};

//Create
export const createStudent = async (data: Student) => {
    const res = await api.post("/v1/students", data)
    return res.data;
};

//Get All
export const getStudents = async ()=> {
    const res = await api.get("/v1/students");
    return res.data;
};

//Get Single
export const getStudentById = async (id: string): Promise<Student> => {
    const response = await api.get(`/v1/students/${id}`);
    return response.data;
};

//Update
export const updateStudent = async (id: string, data: Student) => {
    const res = await api.put(`/v1/students/${id}`,data);
    return res.data;
}

//Delete
export const deleteStudent = async (id: string) => {
    const res = await api.delete(`/v1/students/${id}`);
    return res.data;
};
