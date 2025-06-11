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
    assignmentTitle: assignment.title,       // ✅ Include title
    totalMarks: assignment.marks,       // ✅ Include total marks
    email: user.email,
    status: 'pending',                       // ✅ Default status
    docLink,
    note,
  };

    try {
      const res = await axios.post('http://localhost:3000/submissions', submissionData);
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
    <div className="p-6 max-w-3xl mx-auto bg-white dark:bg-gray-800 dark:text-white rounded-xl shadow space-y-6">
      <img src={assignment.photo} alt={assignment.title} className="rounded w-full h-64 object-cover" />
      <h2 className="text-3xl font-bold">{assignment.title}</h2>
      <p><span className='text-xl font-semibold'>Marks:</span> {assignment.marks}</p>
      <p><span className='text-xl font-semibold'>Difficulty:</span> {assignment.difficulty}</p>
      <p><span className='text-xl font-semibold'>Due Date:</span> {new Date(assignment.dueDate).toLocaleDateString()}</p>
      <p className="mt-4"><span className='text-xl font-semibold'>Description :</span>{assignment.description}</p>
      <div className="sm:col-span-2">
          <h3 className="font-semibold text-lg mb-1">Created By</h3>
          <p className="text-sm">{assignment.name} ({assignment.email})</p>
        </div>
       <div className=" flex">
         <button
                onClick={() => navigate("/assignments")}
                className=" text-3xl font-extrabold p-2 m-2"
            >
                ← 
            </button>
      <button
        onClick={() => setShowModal(true)}
        className="btn btn-primary mt-4"
      >
        Take Assignment
      </button>
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
