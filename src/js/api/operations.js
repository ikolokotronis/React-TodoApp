import { API_KEY, API_URL } from "./config";

/**
 * Fetch all operations
 * @param {string} id - ID of task
 * @param {function} successCallback - Function that saves incoming data
 */
export const getOperations = async (id, successCallback) => {
    try {
        const response = await fetch(`${API_URL}/tasks/${id}/operations`, {
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

export const addOperation = async (id, description, timeSpent) => {
    try {
        const response = await fetch(`${API_URL}/tasks/${id}/operations`, {
            headers: {
                Authorization: API_KEY,
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                description: description,
                timeSpent: timeSpent
            })
        });

        const data = await response.json();
        console.log(data)

        if (data.error) {
            throw new Error("Error!");
        }

    } catch (err) {
        console.log(err);
    }
};
