import { useEffect, useState } from "react";
import { getJobs } from "../services/api";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs().then(setJobs);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {jobs.map((job) => (
        <div key={job.id} className="p-4 bg-white shadow rounded">
          <h2>{job.title}</h2>
          <p>{job.company}</p>
        </div>
      ))}
    </div>
  );
}