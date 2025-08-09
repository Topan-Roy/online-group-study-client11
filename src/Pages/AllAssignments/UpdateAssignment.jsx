import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { useLoaderData, useNavigate } from 'react-router';


const UpdateAssignment = () => {
    const assignmentData = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [dueDate, setDueDate] = useState(new Date(assignmentData.dueDate));
    const [unauthorized, setUnauthorized] = useState(false);

 
    useEffect(() => {
        if (assignmentData.email !== user?.email) {
            setUnauthorized(true);
            Swal.fire({
                icon: 'error',
                title: 'Unauthorized',
                text: 'You are not allowed to update this assignment!',
            });
        }
    }, [assignmentData.email, user]);

    const handleUpdateAssignment = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedAssignment = Object.fromEntries(formData.entries());
        updatedAssignment.dueDate = dueDate.toISOString();
        updatedAssignment.email = user.email;

        try {
            const res = await axios.put(`https://online-group-study-assignment-serve.vercel.app/assignments/${assignmentData._id}`, updatedAssignment);
            if (res.data.modifiedCount > 0 || res.data.acknowledged) {
                Swal.fire('Success', 'Assignment updated successfully!', 'success');
                navigate('/assignments');
            } else {
                Swal.fire('No changes made', '', 'info');
            }
        } catch (err) {
            Swal.fire('Error', err.message, 'error');
        }
    };

    if (unauthorized) {
        return (
            <div className="text-center mt-20">
                <h2 className="text-2xl text-red-500 font-bold">Access Denied</h2>
                <p className="text-lg">Only the creator can update this assignment.</p>
                <button
                    onClick={() => navigate("/assignments")}
                    className="mt-5 px-4 py-2 bg-[#86e57d] text-white rounded hover:bg-[#86e57d] transition"
                >
                    ← Back to Assignments
                </button>
            </div>
        );
    }

    return (
        <div className="mt-5 bg-gray-100 dark:bg-gray-300 dark:text-gray-800 rounded-2xl">
            <div className="p-12 text-center space-y-4">
                <h1 className="text-5xl font-bold">Update Assignment</h1>
            </div>

            <form onSubmit={handleUpdateAssignment}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Title */}
                    <fieldset className="fieldset bg-gray-300 dark:bg-gray-100 dark:text-gray-800 border-gray-500 rounded-box border p-4">
                        <label className="label">Title</label>
                        <input
                            type="text"
                            name="title"
                            defaultValue={assignmentData.title}
                            className="input bg-white w-full"
                            placeholder="Assignment title"
                            required
                        />
                    </fieldset>

                    {/* Image URL */}
                    <fieldset className="fieldset bg-gray-300 dark:bg-gray-100 dark:text-gray-800 border-gray-500 rounded-box border p-4">
                        <label className="label">Thumbnail Image URL</label>
                        <input
                            type="text"
                            name="photo"
                            defaultValue={assignmentData.photo}
                            className="input bg-white w-full"
                            placeholder="Image URL"
                            required
                        />
                    </fieldset>

                    {/* Marks */}
                    <fieldset className="fieldset bg-gray-300 dark:bg-gray-100 dark:text-gray-800 border-gray-500 rounded-box border p-4">
                        <label className="label">Marks</label>
                        <input
                            type="number"
                            name="marks"
                            defaultValue={assignmentData.marks}
                            className="input bg-white w-full"
                            placeholder="Total marks"
                            required
                        />
                    </fieldset>

                    {/* Difficulty */}
                    <fieldset className="fieldset bg-gray-300 dark:bg-gray-100 dark:text-gray-800 border-gray-500 rounded-box border p-4">
                        <label className="label">Difficulty Level</label>
                        <select
                            name="difficulty"
                            defaultValue={assignmentData.difficulty}
                            className="select w-full bg-white"
                            required
                        >
                            <option value="">Select Difficulty</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </fieldset>

                    {/* Due Date */}
                    <fieldset className="fieldset bg-gray-300 dark:bg-gray-100 dark:text-gray-800 border-gray-500 rounded-box border p-4">
                        <label className="label">Due Date</label>
                        <DatePicker
                            selected={dueDate}
                            onChange={(date) => setDueDate(date)}
                            className="input w-full bg-white"
                            dateFormat="yyyy-MM-dd"
                            required
                        />
                    </fieldset>
                </div>

                {/* Description */}
                <fieldset className="fieldset bg-gray-300 dark:bg-gray-100 dark:text-gray-800 border-gray-500 rounded-box border p-4">
                    <label className="label">Description</label>
                    <textarea
                        name="description"
                        defaultValue={assignmentData.description}
                        className="textarea w-full bg-white"
                        placeholder="Assignment description"
                        rows="4"
                        required
                    ></textarea>
                </fieldset>

                <input
                    type="submit"
                    className="btn btn-primary w-full mt-6"
                    value="Update Assignment"
                />
            </form>

            <button
                onClick={() => navigate("/assignments")}
                className="mb-6 mt-5 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
                ← Back to Assignments
            </button>
        </div>
    );
};

export default UpdateAssignment;
