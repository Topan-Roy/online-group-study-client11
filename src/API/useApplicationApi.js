
import useAxiosSecure from "../hooks/useAxiosSecure";
const useSubmissionApi = () => {
  const axiosSecure = useAxiosSecure();

  const getUserSubmissions = (email) => {
    return axiosSecure.get(`/submissions?email=${email}`)
      .then(res => res.data);
  };

  return { getUserSubmissions };
};

export default useSubmissionApi;
