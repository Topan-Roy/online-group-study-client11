import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Link, useLoaderData } from 'react-router';

const Assignments = () => {
    const assignmentsData = useLoaderData();
    const [assignments, setAssignments] = useState(assignmentsData);
    const [searchTerm, setSearchTerm] = useState("");
    const { user } = useContext(AuthContext);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this assignment!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.delete(
                        `https://online-group-study-assignment-serve.vercel.app/assignments/${id}`,
                        { params: { email: user.email } }
                    );
                    const data = response.data;

                    if (data.deletedCount > 0) {
                        Swal.fire('Deleted!', 'Assignment has been deleted.', 'success');
                        setAssignments(assignments.filter((a) => a._id !== id));
                    } else {
                        Swal.fire('Error', data.message || 'Failed to delete', 'error');
                    }
                } catch (error) {
                    Swal.fire('Error', error.message || 'Failed to delete', 'error');
                }
            }
        });
    };

    // সার্চ ফিল্টার
    const filteredAssignments = assignments.filter(a =>
        a.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4">
            {/* Search Box */}
            <div className="mb-6 mt-10 flex justify-center">
                <input
                    type="text"
                    placeholder="Search assignments..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input input-bordered w-full max-w-xs bg-[#dbd0dd] dark:bg-gray-700 dark:text-white"
                />
            </div>

            {/* Assignment Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {filteredAssignments.length > 0 ? (
                    filteredAssignments.map((assignment) => (
                        <div
                            key={assignment._id}
                            className="card bg-white dark:bg-gray-800 dark:text-white shadow-xl p-4 rounded-xl hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={assignment.photo}
                                alt={assignment.title}
                                className="rounded-xl mb-3 h-40 object-cover w-full"
                            />
                            <h2 className="text-xl font-semibold">{assignment.title}</h2>
                            <p>Marks: {assignment.marks}</p>
                         

                            <div className="mt-4 flex gap-2 flex-wrap">
                                <Link to={`/assignments/${assignment._id}`}>
                                    <button className="btn btn-sm bg-[#82c940] text-white">View</button>
                                </Link>

                                <Link to={`/assignment/update/${assignment._id}`}>
                                    <button className="btn btn-sm bg-[#d194e1] text-white">Update</button>
                                </Link>

                                {assignment.email === user?.email && (
                                    <button
                                        onClick={() => handleDelete(assignment._id)}
                                        className="btn btn-sm btn-error"
                                    >
                                        Delete
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500 dark:text-gray-300">
                        No assignments found
                    </p>
                )}
            </div>
        </div>
    );
};

export default Assignments;
