import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const MyAssignments = () => {
  const { user, loading } = useContext(AuthContext);
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:3000/submissions?email=${user.email}`)
        .then((res) => setSubmissions(res.data))
        .catch((err) => console.error('Failed to load submissions', err));
    }
  }, [user]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!user) return <Navigate to="/login" />;

  return (
    <div className="p-6 mt-5 rounded-2xl bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center">My Submitted Assignments</h2>

      {submissions.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          You haven’t submitted any assignments yet.
        </p>
      ) : (
        <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow rounded-xl">
          <table className="min-w-full text-sm divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
              <tr>
                <th className="text-left py-3 px-4">Title</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Total Marks</th>
                <th className="text-left py-3 px-4">Obtained Marks</th>
                <th className="text-left py-3 px-4">Feedback</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {submissions.map((s) => (
                <tr key={s._id} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                  <td className="py-3 px-4">{s.assignmentTitle}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        s.status === 'pending'
                          ? 'bg-yellow-200 text-yellow-800 dark:bg-yellow-400 dark:text-black'
                          : 'bg-green-200 text-green-800 dark:bg-green-400 dark:text-black'
                      }`}
                    >
                      {s.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{s.totalMarks}</td>
                  <td className="py-3 px-4">{s.obtainedMarks ?? 'N/A'}</td>
                  <td className="py-3 px-4">{s.feedback || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyAssignments;
