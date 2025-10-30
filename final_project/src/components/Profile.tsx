import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
const API = import.meta.env.VITE_API_URL || "http://localhost:3000";

export default function Profile() {
  const { id } = useParams();
  const [d, setD] = useState<any>(null);
  useEffect(() => {
    if (!id) return;
    axios
      .get(`${API}/dorms/${id}`)
      .then((r) => setD(r.data))
      .catch(() => setD(null));
  }, [id]);
  if (!d) return <p className="p-6">Loading...</p>;
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold">{d.DormName}</h1>
      <p>{d.Details}</p>
      <p>เดือน: {d.price_month}</p>
      <Link to="/" className="text-blue-600">
        Back
      </Link>
    </div>
  );
}
