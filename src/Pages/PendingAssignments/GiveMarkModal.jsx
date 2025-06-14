import axios from 'axios';
import Swal from 'sweetalert2';

const GiveMarkModal = ({ submission, onClose }) => {
  const handleMark = async (e) => {
    e.preventDefault();
    const form = e.target;
    const obtainedMarks = form.marks.value;
    const feedback = form.feedback.value;

    try {
      await axios.put(`https://online-group-study-assignment-serve.vercel.app/submissions/${submission._id}/mark`, {
        obtainedMarks,
        feedback,
      });

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Mark submitted successfully!',
        timer: 1500,
        showConfirmButton: false,
      });

      onClose();
      setTimeout(() => window.location.reload(), 1600);
    } catch (error) {
         console.error('Marking Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong while submitting marks!',
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-lg w-96">
        <h3 className="text-lg font-bold mb-2">Give Mark</h3>
        <p>
          <span className="font-semibold">Google Docs:</span>{' '}
          <a className="text-blue-600 underline" target="_blank" rel="noreferrer" href={submission.docLink}>
            Open
          </a>
        </p>
        <p className="mb-4">
          <span className="font-semibold">Note:</span> {submission.note}
        </p>

        <form onSubmit={handleMark} className="space-y-3">
          <input
            type="number"
            name="marks"
            placeholder="Enter marks"
            required
            className="input bg-white input-bordered w-full"
          />
          <textarea
            name="feedback"
            placeholder="Feedback"
            required
            className="textarea bg-white textarea-bordered w-full"
          />
          <div className="flex justify-end gap-2">
            <button type="button" className="btn btn-sm btn-ghost" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-sm btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GiveMarkModal;
