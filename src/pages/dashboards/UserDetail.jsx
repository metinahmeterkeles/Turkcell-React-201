import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [userDetail, setUserDetail] = useState(location.state);
  console.log(location);

  useEffect(() => {
    if (!userDetail?.id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => setUserDetail(data));
    }
  }, [id, userDetail]);

  return (
    <div>
      <h2>Kullanıcı Detayları</h2>
      {userDetail && <pre>{JSON.stringify(userDetail, null, 2)}</pre>}
      <Link to={`/users/${Number(id) + 1}`}>Sonraki Kullanıcı</Link>
    </div>
  );
};

export default UserDetail;
