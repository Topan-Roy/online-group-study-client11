import React, { useContext, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';

const ViewAssignment = () => {
  const assignment = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const docLink = form.docLink.value;
    const note = form.note.value;

    const submissionData = {
      assignmentId: assignment._id,
      assignmentTitle: assignment.title,
      totalMarks: assignment.marks,
      email: user.email,
      status: 'pending',
      docLink,
      note,
    };

    try {
      const res = await axios.post('https://online-group-study-assignment-serve.vercel.app/submissions', submissionData);
      if (res.data.insertedId) {
        Swal.fire('Submitted!', 'Your assignment is pending for review.', 'success');
        setShowModal(false);
        navigate('/assignments');
      } else {
        Swal.fire('Error', 'Something went wrong!', 'error');
      }
    } catch (err) {
      Swal.fire('Error', err.message, 'error');
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-15 bg-white dark:bg-gray-800 dark:text-white rounded-2xl shadow-lg overflow-hidden transition hover:shadow-2xl duration-300">

      {/* Image */}
      <div className="relative">
        <img
          src={assignment.photo}
          alt={assignment.title}
          className="w-full h-72 object-cover"
        />
        {/* Difficulty Badge */}
        <span
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold shadow-lg 
        ${assignment.difficulty.toLowerCase() === "hard" ? "bg-red-500 text-white" :
              assignment.difficulty.toLowerCase() === "medium" ? "bg-yellow-500 text-white" :
                "bg-green-500 text-white"}`}
        >
          {assignment.difficulty}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">

        {/* Title */}
        <h2 className="text-3xl font-bold border-b-2 border-blue-500 pb-2">
          {assignment.title}
        </h2>

        {/* Marks & Due Date */}
        <div className="flex flex-wrap gap-4">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium shadow">
            Marks: {assignment.marks}
          </span>
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium shadow">
            Due: {new Date(assignment.dueDate).toLocaleDateString()}
          </span>
        </div>

        {/* Description */}
        <p className="leading-relaxed">
          <span className="font-semibold text-lg">Description:</span> {assignment.description}
        </p>

        {/* Creator Info */}
        <div className="pt-4 border-t border-gray-300 dark:border-gray-700">
          <h3 className="font-semibold text-lg mb-1 text-blue-500">Created By</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {assignment.name} ({assignment.email})
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 pt-4">
          <button
            onClick={() => navigate("/assignments")}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            ←
          </button>

          <button
            onClick={() => setShowModal(true)}
            className="px-5 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg shadow hover:from-green-500 hover:to-green-700 transition"
          >
            Take Assignment
          </button>
        </div>
      </div>



      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-xl w-[90%] max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl font-bold"
            >
              &times;
            </button>

            <h3 className="text-2xl font-semibold mb-4">Submit Your Assignment</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-medium mb-1">Google Docs Link</label>
                <input
                  type="url"
                  name="docLink"
                  required
                  className="input w-full bg-white border px-3 py-2 rounded"
                  placeholder="https://docs.google.com/..."
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Quick Note</label>
                <textarea
                  name="note"
                  rows="3"
                  className="textarea bg-white w-full border px-3 py-2 rounded"
                  placeholder="Write a short note..."
                ></textarea>
              </div>

              <input
                type="submit"
                className="btn bg-green-600 text-white w-full hover:bg-green-700 transition rounded py-2"
                value="Submit Assignment"
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewAssignment;
