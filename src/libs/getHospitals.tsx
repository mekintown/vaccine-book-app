const baseUrl = "http://localhost:5001/api/v1/hospitals";

const getHospitals = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await fetch(baseUrl, { next: { tags: ["hospitals"] } });
  if (!response.ok) {
    throw new Error("Failed to fetch hospitals");
  }
  return await response.json();
};

export default getHospitals;
