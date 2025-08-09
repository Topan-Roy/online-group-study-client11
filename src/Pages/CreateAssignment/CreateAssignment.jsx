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
            const response = await axios.post('https://online-group-study-assignment-serve.vercel.app/assignments', assignment);
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

    return (
       <div className="mt-15 bg-gray-50 dark:bg-gray-900 dark:text-gray-100 rounded-2xl shadow-lg">
  <div className="p-12 text-center space-y-4">
    <h1 className="text-5xl font-bold">Create New Assignment</h1>
  </div>

  <form onSubmit={handleCreateAssignment} className="px-6 pb-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      
      {/* Title */}
      <fieldset className="fieldset bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-4">
        <label className="label text-gray-700 dark:text-gray-200">Title</label>
        <input
          type="text"
          name="title"
          className="input w-full bg-white dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#82c940]"
          placeholder="Assignment title"
          required
        />
      </fieldset>

      {/* Image URL */}
      <fieldset className="fieldset bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-4">
        <label className="label text-gray-700 dark:text-gray-200">Thumbnail Image URL</label>
        <input
          type="text"
          name="photo"
          className="input w-full bg-white dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#82c940]"
          placeholder="Image URL"
          required
        />
      </fieldset>

      {/* Marks */}
      <fieldset className="fieldset bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-4">
        <label className="label text-gray-700 dark:text-gray-200">Marks</label>
        <input
          type="number"
          name="marks"
          className="input w-full bg-white dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#82c940]"
          placeholder="Total marks"
          required
        />
      </fieldset>

      {/* Difficulty */}
      <fieldset className="fieldset bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-4">
        <label className="label text-gray-700 dark:text-gray-200">Difficulty Level</label>
        <select
          name="difficulty"
          className="select w-full bg-white dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#82c940]"
          required
        >
          <option value="">Select Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </fieldset>

      {/* Due Date */}
      <fieldset className="fieldset bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-4">
        <label className="label text-gray-700 dark:text-gray-200">Due Date</label>
        <DatePicker
          selected={dueDate}
          onChange={(date) => setDueDate(date)}
          className="input w-full bg-white dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#82c940]"
          dateFormat="yyyy-MM-dd"
          required
        />
      </fieldset>
    </div>

    {/* Description */}
    <fieldset className="fieldset bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-4 mt-4">
      <label className="label text-gray-700 dark:text-gray-200">Description</label>
      <textarea
        name="description"
        className="textarea w-full bg-white dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#82c940]"
        placeholder="Assignment description"
        rows="4"
        required
      ></textarea>
    </fieldset>

    <input
      type="submit"
      className="btn w-full mt-6 bg-[#82c940] hover:bg-[#6bab34] text-white font-semibold"
      value="Create Assignment"
    />
  </form>
</div>

    );
};

export default CreateAssignment;
