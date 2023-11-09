import { useEffect, useState } from "react";

export default function Statitistics() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div>Statitistics {categories.length}</div>;
}
