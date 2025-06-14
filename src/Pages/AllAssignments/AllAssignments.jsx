import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

import axios from 'axios';
import { Link, useLoaderData } from 'react-router';

const Assignments = () => {
    const assignmentsData = useLoaderData();
    const [assignments, setAssignments] = useState(assignmentsData);
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
                    const response = await axios.delete(`https://online-group-study-assignment-serve.vercel.app/assignments/${id}`, {
                        params: { email: user.email },
                    });
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

    return (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assignments.map((assignment) => (
                <div key={assignment._id} className="card bg-white dark:bg-gray-800  dark:text-white shadow-xl p-4 rounded-xl">
                    <img
                        src={assignment.photo}
                        alt={assignment.title}
                        className="rounded-xl mb-3 h-40 object-cover w-full"
                    />
                    <h2 className="text-xl font-semibold">{assignment.title}</h2>
                    <p>Marks: {assignment.marks}</p>
                    <p>Difficulty: {assignment.difficulty}</p>

                    <div className="mt-4 flex gap-2">
                        <Link to={`/assignments/${assignment._id}`}>
                            <button className="btn btn-sm btn-info">View</button>
                        </Link>

                        <Link to={`/assignment/update/${assignment._id}`}>
                            <button className="btn btn-sm btn-warning">Update</button>
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
            ))}
        </div>
    );
};

export default Assignments;
