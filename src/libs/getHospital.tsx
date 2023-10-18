const baseUrl = "http://localhost:5001/api/v1/hospitals";

const getHospital = async (id: string) => {
  const response = await fetch(`${baseUrl}/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch hospitals");
  }
  return await response.json();
};

export default getHospital;
