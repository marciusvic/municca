import axiosInstance from "./config";

export interface LoginUser {
    email: string;
    password: string;
}

export interface RegisterUser {
    name: string;
    email: string;
    password: string;
    role: string;
}

export interface DocumentData {
    id: number;
    name: string;
    status: string;
    userId: number;
}

export const login = async (data: LoginUser) => {
    const { email, password } = data;
    try {
        const response = await axiosInstance.post("/auth/login", {
            email,
            password,
        });
        console.log("API Response:", response); // Adicione este log
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        throw error; // Adicione esta linha para propagar o erro corretamente
    }
};


export const register = async (data: RegisterUser) => {
    const { name, email, password, role } = data;
    try {
        const response = await axiosInstance.post("/auth/register", {
            name,
            email,
            password,
            role,
        });
        return response.data;
    } catch (error) {
        console.error(error);
  }
}

export const fetchDocuments = async () => {
    try {
        const response = await axiosInstance.get("/documents");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const deleteDocument = async (id: number | undefined) => {
    try {
        await axiosInstance.delete(`/documents/${id}`);
    } catch (error) {
        console.error(error);
    }
}
