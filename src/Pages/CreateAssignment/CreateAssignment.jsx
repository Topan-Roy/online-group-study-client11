import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import axios from 'axios';
import { useNavigate } from 'react-router';

const CreateAssignment = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [dueDate, setDueDate] = useState(new Date());

    const handleCreateAssignment = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const assignment = Object.fromEntries(formData.entries());
        assignment.email = user.email;
        assignment.dueDate = dueDate.toISOString();

        try {
            const response = await axios.post('http://localhost:3000/assignments', assignment);
            const data = response.data;

            if (data.insertedId) {
                Swal.fire({
                    title: 'Assignment Created Successfully!',
                    icon: 'success',
                });
                navigate('/assignments');
            } else {
                Swal.fire({
                    title: 'Something went wrong!',
                    icon: 'error',
                });
            }
        } catch (error) {
            console.error('Error creating assignment:', error);
        }
    };

    //   if (!user) {
    //     return (
    //       <p className="text-center text-red-500 text-xl mt-20">
    //         Please login to create an assignment.
    //       </p>
    //     );
    //   }

    return (
        <div className="mt-5 bg-gray-100 dark:bg-gray-300 dark:text-gray-800 rounded-2xl">
            <div className="p-12 text-center space-y-4">
                <h1 className="text-5xl font-bold">Create New Assignment</h1>
            </div>

            <form onSubmit={handleCreateAssignment}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Title */}
                    <fieldset className="fieldset bg-gray-300 dark:bg-gray-100 dark:text-gray-800 border-gray-500 rounded-box border p-4">
                        <label className="label">Title</label>
                        <input
                            type="text"
                            name="title"
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
                            className="input bg-white w-full"
                            placeholder="Total marks"
                            required
                        />
                    </fieldset>

                    {/* Difficulty */}
                    <fieldset className="fieldset bg-gray-300 dark:bg-gray-100 dark:text-gray-800 border-gray-500 rounded-box border p-4">
                        <label className="label">Difficulty Level</label>
                        <select name="difficulty" className="select w-full bg-white" required>
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
                        className="textarea w-full bg-white"
                        placeholder="Assignment description"
                        rows="4"
                        required
                    ></textarea>
                </fieldset>

                <input
                    type="submit"
                    className="btn btn-primary w-full mt-6"
                    value="Create Assignment"
                />
            </form>
        </div>
    );
};

export default CreateAssignment;
