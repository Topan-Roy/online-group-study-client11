import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useUserSubmissions from '../../hooks/useUserSubmissions';

const MyAssignments = () => {
  const { user } = useContext(AuthContext);
  const { submissions, loading } = useUserSubmissions(user?.email);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
   <div className="p-6 mt-15 rounded-2xl bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
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
              {submissions.map(s => (
                <tr key={s._id} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                  <td className="py-3 px-4">{s.assignmentTitle}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      s.status === 'pending'
                        ? 'bg-yellow-200 text-yellow-800 dark:bg-yellow-400 dark:text-black'
                        : 'bg-green-200 text-green-800 dark:bg-green-400 dark:text-black'
                    }`}>
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
