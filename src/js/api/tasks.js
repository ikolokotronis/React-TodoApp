import { API_KEY, API_URL } from "./config";

/**
 * Fetch all tasks
 * @param {function} successCallback - Function that saves incoming data
 */
export const getTasks = async (successCallback) => {
    try {
        const response = await fetch(`${API_URL}/tasks`, {
            headers: {
                Authorization: API_KEY,
            },
        });

        const data = await response.json();

        if (data.error || typeof successCallback !== "function") {
            throw new Error("Error!");
        }

        successCallback(data.data);
    } catch (err) {
        console.log(err);
    }
};

export const addTask = async (title, description, status) => {
    try {
        const response = await fetch(`${API_URL}/tasks`, {
            method: "POST",
            headers: {
                Authorization: API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                description: description,
                status: status
            })
        })

        const data = await response.json();

        if (data.error) {
            throw new Error("Error!");
        }

    } catch (err) {
        console.log(err)
    }
};

export const removeTask = async (id) => {
    try {
        const response = await fetch(`${API_URL}/tasks/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: API_KEY,
            }
        })

        const data = await response.json();

        if (data.error) {
            throw new Error("Error!");
        }

    } catch (err) {
        console.log(err)
    }
};

export const finishTask = async (id, title, description) => {
    try {
        const response = await fetch(`${API_URL}/tasks/${id}`, {
            method: "PUT",
            headers: {
                Authorization: API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                description: description,
                status: "closed"
            })
        })
        const data = await response.json();

        if (data.error) {
            throw new Error("Error!");
        }
    } catch (err) {
        console.log(err)
    }
};
