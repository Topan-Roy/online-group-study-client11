import { useEffect, useState } from 'react';
import useSubmissionApi from '../API/useApplicationApi';


const useUserSubmissions = (email) => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  const { getUserSubmissions } = useSubmissionApi();

  useEffect(() => {
    if (!email) return;

    setLoading(true);
    getUserSubmissions(email)
      .then(data => {
        setSubmissions(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch submissions', err);
        setLoading(false);
      });
  }, [email]);

  return { submissions, loading };
};

export default useUserSubmissions;
