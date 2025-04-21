export const getLawyers = () => {
  const storedLawyersSTR = localStorage.getItem("lawyerList");

  if (storedLawyersSTR) {
    const storedLawyerData = JSON.parse(storedLawyersSTR);
    return storedLawyerData;

  } else {
    return [];
  }
};

const setToLocal = (set) => {
  const data = JSON.stringify(set);
  localStorage.setItem("lawyerList", data);
};

export const setLawyers = (id) => {
  const storedLawyerData = getLawyers();
  if (!storedLawyerData.includes(id)) {
    storedLawyerData.push(id);
    setToLocal(storedLawyerData);
  }
};

export const removeLawyers = (id) => {
  const storedLawyerData = getLawyers();
  const remaining = storedLawyerData.filter((storedId) => storedId != id);
  setToLocal(remaining);
};
