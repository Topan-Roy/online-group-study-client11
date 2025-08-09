import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import GiveMarkModal from './GiveMarkModal';

const PendingAssignments = () => {
  const { user } = useContext(AuthContext);
  const [pending, setPending] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios.get('https://online-group-study-assignment-serve.vercel.app/submissions/pending')
      .then(res => {
        const others = res.data.filter(sub => sub.email !== user.email);
        setPending(others);
      });
  }, [user]);

  return (
    <div className="p-6 mt-5 bg-white dark:bg-gray-800 dark:text-white rounded-2xl ">
      <h2 className="text-2xl font-bold mb-4">Pending Assignments</h2>
      {pending.length === 0 ? (
        <p className="text-gray-500 text-center">No pending assignments found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full text-sm">
            <thead className="bg-gray-200 text-black dark:bg-gray-800 dark:text-white">
              <tr>
                <th>Title</th>
                <th>Total Marks</th>
                <th>Examinee</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {pending.map((p) => (
                <tr key={p._id}>
                  <td>{p.assignmentTitle}</td>
                  <td>{p.totalMarks}</td>
                  <td>{p.email}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-info bg-[#86e57d]"
                      onClick={() => setSelected(p)}
                    >
                      Give Mark
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {selected && (
        <GiveMarkModal submission={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default PendingAssignments;
